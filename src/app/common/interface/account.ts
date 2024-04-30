import { UUID } from "./UUID";
import { Language, ReachPointType, UserRole } from "./enum";

export interface Account {
}

export interface Credential {
  id: number;
  username: string;
  password: string;
  platform: string;
  version: string;
  lastConnection: Date;
}

export interface User {
  firstName?: string;
  lastName?: string;
  reachPoint?: ReachPoint[];
  businessObjectID?: UUID;
  device?: Device;
  reference?: string;
  roles?: UserRole[];
  credentials?: Credential[];
}

export interface ReachPoint {
    clsid?: string;
    isFavourite?: boolean;
    isFilled?: boolean;
    isReadOnly?: boolean;
    isDefaultable?: boolean;
    type: ReachPointType;
}

export interface Device {
    clsid: string;
    alias: string;
    ip: string;
}
