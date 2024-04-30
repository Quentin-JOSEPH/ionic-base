import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credential, User } from 'src/app/common/interface/account';
import { ApiService } from 'src/app/common/services/api.service';
import { CacheService } from 'src/app/common/services/cache.service';
import { DataStorageService } from 'src/app/common/services/data-storage.service';
import { environment } from 'src/environments/environment';

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
export class ProfilPage implements OnInit {

  appVersion = environment.appVersion;

  constructor(public dataStorageService: DataStorageService, private router: Router, public cacheData: CacheService, private api: ApiService) { }

  ngOnInit(): void {
    console.log('profil');
  }

  connectUser(cred: Credential) {
    this.api.getCredential(cred).subscribe(response => {
      this.cacheData.user = response.result;
    });
  }

  connectUserForTest(type: string) {
    let cred: Credential = {
      username: '',
      password: '',
      platform: '',
      version: environment.appVersion,
    };

    let user: User = {
      firstName: type,
      lastName: 'TestOnly',
      lastConnection: new Date(),
    }

    this.cacheData.user = user;
  }

  logout() {
    this.cacheData.user = undefined;
  }
}
