import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bar } from 'src/app/interfaces/common.interfaces';
import { MapPopupComponent } from './map-popup/map-popup.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() bar: Bar;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  onClick() {
    this.dialog.open(MapPopupComponent, {
      data: {
        url: this.bar.location,
        title: this.bar.title,
      },
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
    });
  }
}
