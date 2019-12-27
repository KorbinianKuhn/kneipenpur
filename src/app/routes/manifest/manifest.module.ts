import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ManifestRoutingModule } from './manifest-routing.module';
import { ManifestComponent } from './manifest.component';

@NgModule({
  declarations: [ManifestComponent],
  imports: [CommonModule, ManifestRoutingModule, HeaderModule]
})
export class ManifestModule {}
