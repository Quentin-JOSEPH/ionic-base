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
    // let languages = ['en', 'de', 'fr', 'it'];
    // const language: Promise<GetLanguageCodeResult> = Device.getLanguageCode();
    // language.then(data => {
    //   let lang = 'fr';
    //   if (languages.indexOf(data.value) !== -1) {
    //     lang = data.value;
    //   }
    //   this.translate.use(lang);
    // });

    this.translate.setDefaultLang('fr');
    this.translate.use('fr'); // You can set the default language here
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
