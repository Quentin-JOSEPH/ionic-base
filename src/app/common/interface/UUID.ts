// import { Guid } from 'guid-typescript';
//TODO FIX IMPORT
export type UUID = string & { _UUIDBrand: undefined };

// export abstract class UUIDTool {
//     static isEmpty(term: string): boolean {
//         if (!term) return false;
//         return Guid.parse(term).isEmpty();
//     }

//     static isUUID(term: string): boolean {
//         if (!term) return false;
//         return Guid.isGuid(term);
//     }

//     static parse(term: string): UUID {
//         if (!Guid.isGuid(term)) throw new Error("Invalid UUID");
//         return Guid.parse(term).toString() as UUID;
//     }

//     static createEmpty(): UUID {
//         return Guid.createEmpty().toString() as UUID;
//     }

//     public static create(): UUID {
//         return Guid.create().toString() as UUID;
//     }
// }
