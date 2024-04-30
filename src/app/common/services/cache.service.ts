import { Injectable } from '@angular/core';
import { User, UserCachedData } from '../interface/account';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  user?: User;

  constructor(public dataStorageService: DataStorageService) { }

  getInitCacheEnvironment(userCachedData: UserCachedData) {
    this.dataStorageService.getData(this.dataStorageService.keyUserId).then(
      data => {
        console.log(data);
        if (data) {
          this.dataStorageService.userId = data;
        }
      }
    );
  }
}
