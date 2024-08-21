// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.0.2
//   protoc               v3.20.3
// source: txData/email.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "push";

export interface Attachment {
  filename: string;
  type: string;
  /** base64 encoded */
  content: string;
}

export interface Email {
  subject: string;
  /** Plain text or HTML body of the email */
  body: string;
  attachments: Attachment[];
}

function createBaseAttachment(): Attachment {
  return { filename: "", type: "", content: "" };
}

export const Attachment = {
  encode(message: Attachment, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Attachment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attachment {
    return {
      filename: isSet(object.filename) ? globalThis.String(object.filename) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: Attachment): unknown {
    const obj: any = {};
    if (message.filename !== "") {
      obj.filename = message.filename;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attachment>, I>>(base?: I): Attachment {
    return Attachment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attachment>, I>>(object: I): Attachment {
    const message = createBaseAttachment();
    message.filename = object.filename ?? "";
    message.type = object.type ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseEmail(): Email {
  return { subject: "", body: "", attachments: [] };
}

export const Email = {
  encode(message: Email, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.subject !== "") {
      writer.uint32(10).string(message.subject);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Email {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subject = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.body = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Email {
    return {
      subject: isSet(object.subject) ? globalThis.String(object.subject) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      attachments: globalThis.Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Email): unknown {
    const obj: any = {};
    if (message.subject !== "") {
      obj.subject = message.subject;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.attachments?.length) {
      obj.attachments = message.attachments.map((e) => Attachment.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Email>, I>>(base?: I): Email {
    return Email.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Email>, I>>(object: I): Email {
    const message = createBaseEmail();
    message.subject = object.subject ?? "";
    message.body = object.body ?? "";
    message.attachments = object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
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
