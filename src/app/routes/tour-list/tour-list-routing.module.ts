import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourListComponent } from './tour-list.component';

const routes: Routes = [
  {
    path: '',
    component: TourListComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./tour/tour.module').then(mod => mod.TourModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourListRoutingModule {}
