import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MapPopupComponent } from './map-popup/map-popup.component';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent, MapPopupComponent],
  imports: [CommonModule, SharedModule],
  exports: [MapComponent],
})
export class MapModule {}
