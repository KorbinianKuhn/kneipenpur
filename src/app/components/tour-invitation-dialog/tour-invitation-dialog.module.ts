import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TourInvitationDialogComponent } from './tour-invitation-dialog.component';

@NgModule({
  declarations: [TourInvitationDialogComponent],
  imports: [CommonModule, SharedModule],
  exports: [TourInvitationDialogComponent],
})
export class TourInvitationDialogModule {}
