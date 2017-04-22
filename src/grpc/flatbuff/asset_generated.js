// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var iroha = iroha || {};

/**
 * @enum
 */
iroha.AnyAsset = {
  NONE: 0,
  ComplexAsset: 1,
  Currency: 2
};

/**
 * @constructor
 */
iroha.ComplexAsset = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {iroha.ComplexAsset}
 */
iroha.ComplexAsset.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {iroha.ComplexAsset=} obj
 * @returns {iroha.ComplexAsset}
 */
iroha.ComplexAsset.getRootAsComplexAsset = function(bb, obj) {
  return (obj || new iroha.ComplexAsset).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.ComplexAsset.prototype.assetName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.ComplexAsset.prototype.domainName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.ComplexAsset.prototype.ledgerName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.ComplexAsset.prototype.description = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @param {iroha.KeyValueObject=} obj
 * @returns {iroha.KeyValueObject}
 */
iroha.ComplexAsset.prototype.prop = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? (obj || new iroha.KeyValueObject).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
iroha.ComplexAsset.prototype.propLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {iroha.AssetLogic=} obj
 * @returns {iroha.AssetLogic}
 */
iroha.ComplexAsset.prototype.logic = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? (obj || new iroha.AssetLogic).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
iroha.ComplexAsset.startComplexAsset = function(builder) {
  builder.startObject(6);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} assetNameOffset
 */
iroha.ComplexAsset.addAssetName = function(builder, assetNameOffset) {
  builder.addFieldOffset(0, assetNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} domainNameOffset
 */
iroha.ComplexAsset.addDomainName = function(builder, domainNameOffset) {
  builder.addFieldOffset(1, domainNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} ledgerNameOffset
 */
iroha.ComplexAsset.addLedgerName = function(builder, ledgerNameOffset) {
  builder.addFieldOffset(2, ledgerNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} descriptionOffset
 */
iroha.ComplexAsset.addDescription = function(builder, descriptionOffset) {
  builder.addFieldOffset(3, descriptionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} propOffset
 */
iroha.ComplexAsset.addProp = function(builder, propOffset) {
  builder.addFieldOffset(4, propOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
iroha.ComplexAsset.createPropVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
iroha.ComplexAsset.startPropVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} logicOffset
 */
iroha.ComplexAsset.addLogic = function(builder, logicOffset) {
  builder.addFieldOffset(5, logicOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
iroha.ComplexAsset.endComplexAsset = function(builder) {
  var offset = builder.endObject();
  builder.requiredField(offset, 4); // asset_name
  builder.requiredField(offset, 6); // domain_name
  builder.requiredField(offset, 8); // ledger_name
  return offset;
};

/**
 * @constructor
 */
iroha.AssetLogic = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {iroha.AssetLogic}
 */
iroha.AssetLogic.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {iroha.AssetLogic=} obj
 * @returns {iroha.AssetLogic}
 */
iroha.AssetLogic.getRootAsAssetLogic = function(bb, obj) {
  return (obj || new iroha.AssetLogic).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {iroha.Chaincode=} obj
 * @returns {iroha.Chaincode}
 */
iroha.AssetLogic.prototype.add = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new iroha.Chaincode).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {iroha.Chaincode=} obj
 * @returns {iroha.Chaincode}
 */
iroha.AssetLogic.prototype.remove = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new iroha.Chaincode).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {iroha.Chaincode=} obj
 * @returns {iroha.Chaincode}
 */
iroha.AssetLogic.prototype.transfer = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? (obj || new iroha.Chaincode).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
iroha.AssetLogic.startAssetLogic = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} addOffset
 */
iroha.AssetLogic.addAdd = function(builder, addOffset) {
  builder.addFieldOffset(0, addOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} removeOffset
 */
iroha.AssetLogic.addRemove = function(builder, removeOffset) {
  builder.addFieldOffset(1, removeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} transferOffset
 */
iroha.AssetLogic.addTransfer = function(builder, transferOffset) {
  builder.addFieldOffset(2, transferOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
iroha.AssetLogic.endAssetLogic = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
iroha.Currency = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {iroha.Currency}
 */
iroha.Currency.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {iroha.Currency=} obj
 * @returns {iroha.Currency}
 */
iroha.Currency.getRootAsCurrency = function(bb, obj) {
  return (obj || new iroha.Currency).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.Currency.prototype.currencyName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.Currency.prototype.domainName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.Currency.prototype.ledgerName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.Currency.prototype.description = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
iroha.Currency.prototype.amount = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
iroha.Currency.prototype.precision = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
iroha.Currency.startCurrency = function(builder) {
  builder.startObject(6);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} currencyNameOffset
 */
iroha.Currency.addCurrencyName = function(builder, currencyNameOffset) {
  builder.addFieldOffset(0, currencyNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} domainNameOffset
 */
iroha.Currency.addDomainName = function(builder, domainNameOffset) {
  builder.addFieldOffset(1, domainNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} ledgerNameOffset
 */
iroha.Currency.addLedgerName = function(builder, ledgerNameOffset) {
  builder.addFieldOffset(2, ledgerNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} descriptionOffset
 */
iroha.Currency.addDescription = function(builder, descriptionOffset) {
  builder.addFieldOffset(3, descriptionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} amount
 */
iroha.Currency.addAmount = function(builder, amount) {
  builder.addFieldInt64(4, amount, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} precision
 */
iroha.Currency.addPrecision = function(builder, precision) {
  builder.addFieldInt64(5, precision, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
iroha.Currency.endCurrency = function(builder) {
  var offset = builder.endObject();
  builder.requiredField(offset, 4); // currency_name
  builder.requiredField(offset, 6); // domain_name
  builder.requiredField(offset, 8); // ledger_name
  return offset;
};

/**
 * @constructor
 */
iroha.Asset = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {iroha.Asset}
 */
iroha.Asset.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {iroha.Asset=} obj
 * @returns {iroha.Asset}
 */
iroha.Asset.getRootAsAsset = function(bb, obj) {
  return (obj || new iroha.Asset).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {iroha.AnyAsset}
 */
iroha.Asset.prototype.assetType = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {iroha.AnyAsset} */ (this.bb.readUint8(this.bb_pos + offset)) : iroha.AnyAsset.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
iroha.Asset.prototype.asset = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
iroha.Asset.startAsset = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {iroha.AnyAsset} assetType
 */
iroha.Asset.addAssetType = function(builder, assetType) {
  builder.addFieldInt8(0, assetType, iroha.AnyAsset.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} assetOffset
 */
iroha.Asset.addAsset = function(builder, assetOffset) {
  builder.addFieldOffset(1, assetOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
iroha.Asset.endAsset = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
iroha.Asset.finishAssetBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.iroha = iroha;