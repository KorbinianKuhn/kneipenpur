import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/components/header/header.module';
import { MapModule } from 'src/app/components/map/map.module';
import { RatingModule } from 'src/app/components/rating/rating.module';
import { BarsRoutingModule } from './bars-routing.module';
import { BarsComponent } from './bars.component';

@NgModule({
  declarations: [BarsComponent],
  imports: [CommonModule, BarsRoutingModule, HeaderModule, RatingModule, MapModule]
})
export class BarsModule {}
