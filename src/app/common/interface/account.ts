import { UUID } from "./UUID";
import { ClassificationScope, ContactType, Currency, Language, ReachPointType, UserRole } from "./enum";

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

export interface UserCachedData {
  portalConfiguration?: PortalConfiguration;
  cachedData: CachedData;
  siteMap: SiteMap;
  whoIs: User;
  jwtToken?: string;
  messagingCredentials: User[];
  settings: Setting[];
  roles: UserRole[];
  cacheVersion?: number;
  classifications?: Classification[]
}

export interface PortalConfiguration {
  frontVersionMinimal: string
}

export interface CachedData {
  clsid: string;
  favoris: Account[];
  contactTypes: ContactType[];
  countries: Country[];
  currencies: Currency[];
}

export interface Country {
  clsid: string;
  isoCode?: string;
  name: string;
}

export interface SiteMap {
  clsid: string;
  sections: SiteMapSection[];
}

export interface SiteMapSection {
  clsid: string;
  links: SiteMapLink[];
  name: string;
}
export interface SiteMapLink {
  clsid: string;
  icon: string;
  link: string;
  name: string;
  routing: boolean;
}

export interface Setting {
  clsid: string;
  settingID: UUID;
  property: string;
  value: string;
  application: string;
  userAccount: string;
}

export interface Classification {
  clsid: string;
  iD: UUID;
  value: string;
  description: string;
  scope: ClassificationScope;
  category: string;
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
