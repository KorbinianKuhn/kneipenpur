import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  exports: [MatIconModule, MatButtonModule, MatDialogModule]
})
export class SharedModule {}
