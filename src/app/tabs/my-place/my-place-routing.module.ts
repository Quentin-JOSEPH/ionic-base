import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPlacePage } from './my-place.page';

const routes: Routes = [
  {
    path: '',
    component: MyPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPlacePageRoutingModule {}
