import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BeerToggleComponent } from './beer-toggle.component';

@NgModule({
  declarations: [BeerToggleComponent],
  imports: [CommonModule, SharedModule],
  exports: [BeerToggleComponent]
})
export class BeerToggleModule {}
