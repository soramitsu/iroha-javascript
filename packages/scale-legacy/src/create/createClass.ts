// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { U8aBitLength, UIntBitLength } from '../codec/types';
import type { Codec, Constructor, Registry } from '../types';
import type { FromReg, TypeDef } from './types';

import { assert, isNumber, isUndefined, stringify } from '@polkadot/util';

import {
    BTreeMap,
    BTreeSet,
    CodecSet,
    Compact,
    Enum,
    HashMap,
    Int,
    Option,
    Result,
    Struct,
    Tuple,
    U8aFixed,
    UInt,
    Vec,
    VecFixed,
} from '../codec';
import { DoNotConstruct } from '../primitive';
import { getTypeDef } from './getTypeDef';
import { TypeDefInfo } from './types';

export function createClass<T extends Codec = Codec>(registry: Registry, type: string): Constructor<FromReg<T>> {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return getTypeClass<FromReg<T>>(registry, getTypeDef(type));
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if it cannot be parsed, it will yield
// a runtime error.
export function ClassOfUnsafe<T extends Codec = Codec>(registry: Registry, name: string): Constructor<FromReg<T>> {
    return createClass<T>(registry, name);
}

// alias for createClass
export function ClassOf<T extends Codec>(registry: Registry, name: string): Constructor<T> {
    // TS2589: Type instantiation is excessively deep and possibly infinite.
    // The above happens with as Constructor<InterfaceTypes[K]>;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ClassOfUnsafe<T>(registry, name) as any;
}

function getSubDefArray(value: TypeDef): TypeDef[] {
    assert(value.sub && Array.isArray(value.sub), () => `Expected subtype as TypeDef[] in ${stringify(value)}`);

    return value.sub;
}

function getSubDef(value: TypeDef): TypeDef {
    assert(value.sub && !Array.isArray(value.sub), () => `Expected subtype as TypeDef in ${stringify(value)}`);

    return value.sub;
}

function getSubType(value: TypeDef): string {
    return getSubDef(value).type;
}

// create a maps of type string constructors from the input
function getTypeClassMap(value: TypeDef): Record<string, string> {
    const result: Record<string, string> = {};

    return getSubDefArray(value).reduce<Record<string, string>>((result, sub) => {
        result[sub.name as string] = sub.type;

        return result;
    }, result);
}

// create an array of type string constructors from the input
function getTypeClassArray(value: TypeDef): string[] {
    return getSubDefArray(value).map(({ type }) => type);
}

function createInt({ displayName, length }: TypeDef, Clazz: typeof Int | typeof UInt): Constructor {
    assert(
        isNumber(length),
        () => `Expected bitLength information for ${displayName || Clazz.constructor.name}<bitLength>`,
    );

    return Clazz.with(length as UIntBitLength, displayName);
}

function createHashMap(value: TypeDef, Clazz: typeof BTreeMap | typeof HashMap): Constructor {
    const [keyType, valueType] = getTypeClassArray(value);

    return Clazz.with(keyType, valueType);
}

const infoMapping: Record<TypeDefInfo, (registry: Registry, value: TypeDef) => Constructor> = {
    [TypeDefInfo.BTreeMap]: (registry: Registry, value: TypeDef): Constructor => createHashMap(value, BTreeMap),

    [TypeDefInfo.BTreeSet]: (registry: Registry, value: TypeDef): Constructor => BTreeSet.with(getSubType(value)),

    [TypeDefInfo.Compact]: (registry: Registry, value: TypeDef): Constructor => Compact.with(getSubType(value)),

    [TypeDefInfo.DoNotConstruct]: (registry: Registry, value: TypeDef): Constructor =>
        DoNotConstruct.with(value.displayName),

    [TypeDefInfo.Enum]: (registry: Registry, value: TypeDef): Constructor => {
        const subs = getSubDefArray(value);

        return Enum.with(
            subs.every(({ type }) => type === 'Null')
                ? subs.reduce<Record<string, number>>((out, { index, name }, count) => {
                      out[name as string] = index || count;

                      return out;
                  }, {})
                : getTypeClassMap(value),
        );
    },

    [TypeDefInfo.HashMap]: (registry: Registry, value: TypeDef): Constructor => createHashMap(value, HashMap),

    [TypeDefInfo.Int]: (registry: Registry, value: TypeDef): Constructor => createInt(value, Int),

    // We have circular deps between Linkage & Struct
    [TypeDefInfo.Linkage]: (registry: Registry, value: TypeDef): Constructor => {
        const type = `Option<${getSubType(value)}>`;
        // eslint-disable-next-line sort-keys
        const Clazz = Struct.with({ previous: type, next: type } as any);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        Clazz.prototype.toRawType = function (): string {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
            return `Linkage<${this.next.toRawType(true)}>`;
        };

        return Clazz;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [TypeDefInfo.Null]: (registry: Registry, _: TypeDef): Constructor => createClass(registry, 'Null'),

    [TypeDefInfo.Option]: (registry: Registry, value: TypeDef): Constructor => Option.with(getSubType(value)),

    [TypeDefInfo.Plain]: (registry: Registry, value: TypeDef): Constructor => registry.getOrUnknown(value.type),

    [TypeDefInfo.Result]: (registry: Registry, value: TypeDef): Constructor => {
        const [Ok, Err] = getTypeClassArray(value);

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return Result.with({ Err, Ok });
    },

    [TypeDefInfo.Set]: (registry: Registry, value: TypeDef): Constructor => {
        const result: Record<string, number> = {};

        return CodecSet.with(
            getSubDefArray(value).reduce<Record<string, number>>((result, { index, name }) => {
                result[name as string] = index as number;

                return result;
            }, result),
            value.length,
        );
    },

    [TypeDefInfo.Struct]: (registry: Registry, value: TypeDef): Constructor =>
        Struct.with(getTypeClassMap(value), value.alias),

    [TypeDefInfo.Tuple]: (registry: Registry, value: TypeDef): Constructor => Tuple.with(getTypeClassArray(value)),

    [TypeDefInfo.UInt]: (registry: Registry, value: TypeDef): Constructor => createInt(value, UInt),

    [TypeDefInfo.Vec]: (registry: Registry, value: TypeDef): Constructor => {
        const subType = getSubType(value);

        return subType === 'u8' ? createClass(registry, 'Bytes') : Vec.with(subType);
    },

    [TypeDefInfo.VecFixed]: (registry: Registry, { displayName, length, sub }: TypeDef): Constructor => {
        assert(isNumber(length) && !isUndefined(sub), 'Expected length & type information for fixed vector');

        return (sub as TypeDef).type === 'u8'
            ? U8aFixed.with((length * 8) as U8aBitLength, displayName)
            : VecFixed.with((sub as TypeDef).type, length);
    },
};

// Returns the type Class for construction
export function getTypeClass<T extends Codec = Codec>(registry: Registry, value: TypeDef): Constructor<T> {
    const Type = registry.get<T>(value.type);

    if (Type) {
        return Type;
    }

    const getFn = infoMapping[value.info];

    assert(getFn, () => `Unable to construct class from ${stringify(value)}`);

    return getFn(registry, value) as Constructor<T>;
}