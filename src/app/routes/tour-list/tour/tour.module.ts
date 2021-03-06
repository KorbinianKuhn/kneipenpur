import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BeerToggleModule } from 'src/app/components/beer-toggle/beer-toggle.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { MapModule } from 'src/app/components/map/map.module';
import { RatingModule } from 'src/app/components/rating/rating.module';
import { TourProgressModule } from 'src/app/components/tour-progress/tour-progress.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TourInvitationDialogModule } from '../../../components/tour-invitation-dialog/tour-invitation-dialog.module';
import { TourRoutingModule } from './tour-routing.module';
import { TourComponent } from './tour.component';

@NgModule({
  declarations: [TourComponent],
  imports: [
    CommonModule,
    TourRoutingModule,
    HeaderModule,
    BeerToggleModule,
    TourProgressModule,
    SharedModule,
    MapModule,
    RatingModule,
    TourInvitationDialogModule,
  ],
})
export class TourModule {}
