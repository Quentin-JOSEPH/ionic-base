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
