import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  userId: string = 'no value';
  keyUserId: string = 'userId';

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

  setStore(value: string) {
    // const value = '140d880b-c429-4a90-ba38-b422719baff1';
    // const value = '00000000-0000-0000-0000-000000000000';

    this.saveData(this.keyUserId, value)
      .then(() => console.log('Data saved successfully'))
      .catch(error => console.error('Error saving data:', error));
    // this.router.navigateByUrl('/tabs/discover');
  }

  deleteStore() {
    this.removeData(this.keyUserId)
      .then(() => console.log('Data saved successfully'))
      .catch(error => console.error('Error saving data:', error));
    // this.router.navigateByUrl('/tabs/discover');
  }

}
