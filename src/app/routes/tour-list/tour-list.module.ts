import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/components/header/header.module';
import { TourProgressModule } from 'src/app/components/tour-progress/tour-progress.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TourListRoutingModule } from './tour-list-routing.module';
import { TourListComponent } from './tour-list.component';

@NgModule({
  declarations: [TourListComponent],
  imports: [CommonModule, TourListRoutingModule, HeaderModule, SharedModule, TourProgressModule]
})
export class TourListModule {}
