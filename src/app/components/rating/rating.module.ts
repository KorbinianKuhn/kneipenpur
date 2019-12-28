import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, SharedModule],
  exports: [RatingComponent]
})
export class RatingModule {}
