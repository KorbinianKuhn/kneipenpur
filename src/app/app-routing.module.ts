import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./routes/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'manifest',
    loadChildren: () => import('./routes/manifest/manifest.module').then(mod => mod.ManifestModule)
  },
  {
    path: 'touren',
    loadChildren: () => import('./routes/tour-list/tour-list.module').then(mod => mod.TourListModule)
  },
  {
    path: 'kneipen',
    loadChildren: () => import('./routes/bars/bars.module').then(mod => mod.BarsModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./routes/info/info.module').then(mod => mod.InfoModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
