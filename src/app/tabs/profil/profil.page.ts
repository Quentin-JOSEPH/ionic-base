import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/common/services/data-storage.service';

// import { Component } from '@angular/core';
// // import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
// import { AlertController } from '@ionic/angular';
// import { DataStorageService } from 'src/app/common/services/data-storage.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss']
})
export class ProfilPage {

  keyStorage: string = 'userId';
  userId: string = 'no value';

  constructor(private dataStorageService: DataStorageService, private router: Router) {}

  ngOnInit() {
    this.dataStorageService.getData(this.keyStorage).then(
      data => {
        console.log(data);
        if (data) {
          this.userId = data;
        }
      }
    );
  }

  setStore(value: string) {
    const key = 'scale';
    // const value = '140d880b-c429-4a90-ba38-b422719baff1';
    // const value = '00000000-0000-0000-0000-000000000000';

    this.dataStorageService.saveData(key, value)
      .then(() => console.log('Data saved successfully'))
      .catch(error => console.error('Error saving data:', error));
    // this.router.navigateByUrl('/tabs/discover');
  }

  deleteStore() {
    this.dataStorageService.removeData(this.keyStorage)
      .then(() => console.log('Data saved successfully'))
      .catch(error => console.error('Error saving data:', error));
    // this.router.navigateByUrl('/tabs/discover');
  }
}
