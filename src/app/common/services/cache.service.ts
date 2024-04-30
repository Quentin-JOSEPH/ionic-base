import { Injectable } from '@angular/core';
import { User, UserCachedData } from '../interface/account';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  user?: User;

  constructor() { }

  getInitCAcheEnvironment(userCachedData: UserCachedData) {

  }
}
