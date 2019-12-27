import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BeerToggleModule } from 'src/app/components/beer-toggle/beer-toggle.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { TourProgressModule } from 'src/app/components/tour-progress/tour-progress.module';
import { TourRoutingModule } from './tour-routing.module';
import { TourComponent } from './tour.component';

@NgModule({
  declarations: [TourComponent],
  imports: [CommonModule, TourRoutingModule, HeaderModule, BeerToggleModule, TourProgressModule]
})
export class TourModule {}
