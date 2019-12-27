import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss']
})
export class MapPopupComponent implements OnInit {
  public url: SafeResourceUrl;
  public title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private domSanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<MapPopupComponent>
  ) {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(data.url);
    this.title = data.title;
  }

  ngOnInit() {}

  onClose() {
    this.dialogRef.close();
  }
}
