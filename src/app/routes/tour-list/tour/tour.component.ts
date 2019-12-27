import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bar, Tour } from 'src/app/interfaces/common.interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  public tour: Tour;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.tour = this.dataService.getTourDetail(this.route.snapshot.params.id);
  }

  onBarChanged(bar: Bar, state: boolean) {
    bar.checked = state;
    this.dataService.saveState();
  }
}
