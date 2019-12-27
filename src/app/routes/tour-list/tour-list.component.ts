import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/interfaces/common.interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
  public tours: Tour[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.tours = this.dataService.getTourList();
  }
}
