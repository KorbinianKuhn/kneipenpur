import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TourProgressComponent } from './tour-progress.component';

@NgModule({
  declarations: [TourProgressComponent],
  imports: [CommonModule, SharedModule],
  exports: [TourProgressComponent]
})
export class TourProgressModule {}
