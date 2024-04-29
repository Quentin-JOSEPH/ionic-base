import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
      },
      {
        path: 'favourites',
        loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesPageModule)
      },
      {
        path: 'my-place',
        loadChildren: () => import('./my-place/my-place.module').then(m => m.MyPlacePageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/discover',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class TabsPageRoutingModule { }
