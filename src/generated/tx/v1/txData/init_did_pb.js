// source: tx/v1/txData/init_did.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.tx.v1.InitDid', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tx.v1.InitDid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tx.v1.InitDid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tx.v1.InitDid.displayName = 'proto.tx.v1.InitDid';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tx.v1.InitDid.prototype.toObject = function(opt_includeInstance) {
  return proto.tx.v1.InitDid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tx.v1.InitDid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tx.v1.InitDid.toObject = function(includeInstance, msg) {
  var f, obj = {
    did: jspb.Message.getFieldWithDefault(msg, 1, ""),
    masterpubkey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    derivedkeyindex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    derivedpubkey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    encderivedprivkey: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tx.v1.InitDid}
 */
proto.tx.v1.InitDid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tx.v1.InitDid;
  return proto.tx.v1.InitDid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tx.v1.InitDid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tx.v1.InitDid}
 */
proto.tx.v1.InitDid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterpubkey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDerivedkeyindex(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDerivedpubkey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncderivedprivkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tx.v1.InitDid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tx.v1.InitDid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tx.v1.InitDid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tx.v1.InitDid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMasterpubkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDerivedkeyindex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDerivedpubkey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEncderivedprivkey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string did = 1;
 * @return {string}
 */
proto.tx.v1.InitDid.prototype.getDid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tx.v1.InitDid} returns this
 */
proto.tx.v1.InitDid.prototype.setDid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string masterPubKey = 2;
 * @return {string}
 */
proto.tx.v1.InitDid.prototype.getMasterpubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tx.v1.InitDid} returns this
 */
proto.tx.v1.InitDid.prototype.setMasterpubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 derivedKeyIndex = 3;
 * @return {number}
 */
proto.tx.v1.InitDid.prototype.getDerivedkeyindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tx.v1.InitDid} returns this
 */
proto.tx.v1.InitDid.prototype.setDerivedkeyindex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string derivedPubKey = 4;
 * @return {string}
 */
proto.tx.v1.InitDid.prototype.getDerivedpubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tx.v1.InitDid} returns this
 */
proto.tx.v1.InitDid.prototype.setDerivedpubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string encDerivedPrivKey = 5;
 * @return {string}
 */
proto.tx.v1.InitDid.prototype.getEncderivedprivkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tx.v1.InitDid} returns this
 */
proto.tx.v1.InitDid.prototype.setEncderivedprivkey = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.tx.v1);
