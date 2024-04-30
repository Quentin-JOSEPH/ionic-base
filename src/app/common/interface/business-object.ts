import { ResponseStatus } from "./enum";

export interface Response {
  clsid?: string;
  status?: ResponseStatus;
  messages?: Message[];
}

export interface Message {
    status?: ResponseStatus;
    description?: string;
    stackTrace?: string;
    exception?: string;
}

export interface TypedResponse<T> extends Response {
  clsid: string;
  result: T;
}

export interface BooleanResponse extends Response {
  clsid: string;
  result: Boolean;
}
