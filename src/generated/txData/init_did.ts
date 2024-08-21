// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.0.2
//   protoc               v3.20.3
// source: txData/init_did.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "push";

export interface InitDid {
  did: string;
  masterPubKey: string;
  derivedKeyIndex: number;
  derivedPubKey: string;
  encDerivedPrivKey: string;
}

function createBaseInitDid(): InitDid {
  return { did: "", masterPubKey: "", derivedKeyIndex: 0, derivedPubKey: "", encDerivedPrivKey: "" };
}

export const InitDid = {
  encode(message: InitDid, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.masterPubKey !== "") {
      writer.uint32(18).string(message.masterPubKey);
    }
    if (message.derivedKeyIndex !== 0) {
      writer.uint32(24).uint32(message.derivedKeyIndex);
    }
    if (message.derivedPubKey !== "") {
      writer.uint32(34).string(message.derivedPubKey);
    }
    if (message.encDerivedPrivKey !== "") {
      writer.uint32(42).string(message.encDerivedPrivKey);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InitDid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.did = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.masterPubKey = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.derivedKeyIndex = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.derivedPubKey = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.encDerivedPrivKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitDid {
    return {
      did: isSet(object.did) ? globalThis.String(object.did) : "",
      masterPubKey: isSet(object.masterPubKey) ? globalThis.String(object.masterPubKey) : "",
      derivedKeyIndex: isSet(object.derivedKeyIndex) ? globalThis.Number(object.derivedKeyIndex) : 0,
      derivedPubKey: isSet(object.derivedPubKey) ? globalThis.String(object.derivedPubKey) : "",
      encDerivedPrivKey: isSet(object.encDerivedPrivKey) ? globalThis.String(object.encDerivedPrivKey) : "",
    };
  },

  toJSON(message: InitDid): unknown {
    const obj: any = {};
    if (message.did !== "") {
      obj.did = message.did;
    }
    if (message.masterPubKey !== "") {
      obj.masterPubKey = message.masterPubKey;
    }
    if (message.derivedKeyIndex !== 0) {
      obj.derivedKeyIndex = Math.round(message.derivedKeyIndex);
    }
    if (message.derivedPubKey !== "") {
      obj.derivedPubKey = message.derivedPubKey;
    }
    if (message.encDerivedPrivKey !== "") {
      obj.encDerivedPrivKey = message.encDerivedPrivKey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InitDid>, I>>(base?: I): InitDid {
    return InitDid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InitDid>, I>>(object: I): InitDid {
    const message = createBaseInitDid();
    message.did = object.did ?? "";
    message.masterPubKey = object.masterPubKey ?? "";
    message.derivedKeyIndex = object.derivedKeyIndex ?? 0;
    message.derivedPubKey = object.derivedPubKey ?? "";
    message.encDerivedPrivKey = object.encDerivedPrivKey ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
