import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr'); // You can set the default language here
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
