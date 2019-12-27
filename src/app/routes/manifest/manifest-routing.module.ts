import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManifestComponent } from './manifest.component';

const routes: Routes = [
  {
    path: '',
    component: ManifestComponent
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
export class ManifestRoutingModule {}
