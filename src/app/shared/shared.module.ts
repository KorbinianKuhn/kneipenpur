import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [MatIconModule, MatButtonModule]
})
export class SharedModule {}
