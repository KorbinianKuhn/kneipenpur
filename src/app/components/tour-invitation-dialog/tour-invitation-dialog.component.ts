import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Tour } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-tour-invitation-dialog',
  templateUrl: './tour-invitation-dialog.component.html',
  styleUrls: ['./tour-invitation-dialog.component.scss'],
})
export class TourInvitationDialogComponent implements OnInit {
  public tour: Tour;
  public invitation: SafeHtml;

  constructor(@Inject(MAT_DIALOG_DATA) data: { tour: Tour }, private domSanitizer: DomSanitizer) {
    this.tour = data.tour;
    this.invitation = this.domSanitizer.bypassSecurityTrustHtml(data.tour.invitation);
  }

  ngOnInit(): void {}
}
