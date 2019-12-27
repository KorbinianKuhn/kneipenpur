import { Component, Input, OnInit } from '@angular/core';
import { Bar } from 'src/app/interfaces/common.interfaces';

@Component({
  selector: 'app-tour-progress',
  templateUrl: './tour-progress.component.html',
  styleUrls: ['./tour-progress.component.scss']
})
export class TourProgressComponent implements OnInit {
  @Input() bars: Bar[];

  constructor() {}

  ngOnInit() {}
}
