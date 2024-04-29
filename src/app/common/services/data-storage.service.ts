import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private storage: Storage) { }

  // Save data to storage
  saveData(key: string, value: any): Promise<any> {
    return this.storage.set(key, value);
  }

  // Retrieve data from storage
  getData(key: string): Promise<any> {
    return this.storage.get(key);
  }

  // Remove data from storage
  removeData(key: string): Promise<any> {
    return this.storage.remove(key);
  }

}
