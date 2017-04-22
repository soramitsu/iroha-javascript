// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var iroha = iroha || {};

/**
 * @constructor
 */
iroha.Transaction = function() {
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
 * @returns {iroha.Transaction}
 */
iroha.Transaction.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {iroha.Transaction=} obj
 * @returns {iroha.Transaction}
 */
iroha.Transaction.getRootAsTransaction = function(bb, obj) {
  return (obj || new iroha.Transaction).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {iroha.PublicKey=} obj
 * @returns {iroha.PublicKey}
 */
iroha.Transaction.prototype.creatorPubKey = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new iroha.PublicKey).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {iroha.Command}
 */
iroha.Transaction.prototype.commandType = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {iroha.Command} */ (this.bb.readUint8(this.bb_pos + offset)) : iroha.Command.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
iroha.Transaction.prototype.command = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {number} index
 * @param {iroha.Signature=} obj
 * @returns {iroha.Signature}
 */
iroha.Transaction.prototype.signatures = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? (obj || new iroha.Signature).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
iroha.Transaction.prototype.signaturesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
iroha.Transaction.prototype.hash = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
iroha.Transaction.prototype.hashLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
iroha.Transaction.prototype.hashArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {iroha.Attachment=} obj
 * @returns {iroha.Attachment}
 */
iroha.Transaction.prototype.attachment = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? (obj || new iroha.Attachment).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
iroha.Transaction.startTransaction = function(builder) {
  builder.startObject(6);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} creatorPubKeyOffset
 */
iroha.Transaction.addCreatorPubKey = function(builder, creatorPubKeyOffset) {
  builder.addFieldOffset(0, creatorPubKeyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {iroha.Command} commandType
 */
iroha.Transaction.addCommandType = function(builder, commandType) {
  builder.addFieldInt8(1, commandType, iroha.Command.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} commandOffset
 */
iroha.Transaction.addCommand = function(builder, commandOffset) {
  builder.addFieldOffset(2, commandOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signaturesOffset
 */
iroha.Transaction.addSignatures = function(builder, signaturesOffset) {
  builder.addFieldOffset(3, signaturesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
iroha.Transaction.createSignaturesVector = function(builder, data) {
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
iroha.Transaction.startSignaturesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} hashOffset
 */
iroha.Transaction.addHash = function(builder, hashOffset) {
  builder.addFieldOffset(4, hashOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
iroha.Transaction.createHashVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
iroha.Transaction.startHashVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} attachmentOffset
 */
iroha.Transaction.addAttachment = function(builder, attachmentOffset) {
  builder.addFieldOffset(5, attachmentOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
iroha.Transaction.endTransaction = function(builder) {
  var offset = builder.endObject();
  builder.requiredField(offset, 4); // creatorPubKey
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
iroha.Transaction.finishTransactionBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @constructor
 */
iroha.Attachment = function() {
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
 * @returns {iroha.Attachment}
 */
iroha.Attachment.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {iroha.Attachment=} obj
 * @returns {iroha.Attachment}
 */
iroha.Attachment.getRootAsAttachment = function(bb, obj) {
  return (obj || new iroha.Attachment).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
iroha.Attachment.prototype.mime = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
iroha.Attachment.prototype.data = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
iroha.Attachment.prototype.dataLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
iroha.Attachment.prototype.dataArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
iroha.Attachment.startAttachment = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} mimeOffset
 */
iroha.Attachment.addMime = function(builder, mimeOffset) {
  builder.addFieldOffset(0, mimeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
iroha.Attachment.addData = function(builder, dataOffset) {
  builder.addFieldOffset(1, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
iroha.Attachment.createDataVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
iroha.Attachment.startDataVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
iroha.Attachment.endAttachment = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.iroha = iroha;