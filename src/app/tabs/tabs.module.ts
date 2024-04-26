import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {

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
