import { Component, OnInit } from '@angular/core';
import { Bar } from 'src/app/interfaces/common.interfaces';
import { DataService } from 'src/app/services/data.service';

interface ViewBar {
  bar: Bar;
  rating: number;
  numRatings: number;
  tours: string[];
}

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  public bars: ViewBar[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const tours = this.dataService.getTourList();
    const bars: ViewBar[] = [];
    for (const tour of tours) {
      for (const bar of tour.bars) {
        let item = bars.find(o => o.bar.title === bar.title);
        if (!item) {
          item = {
            bar,
            rating: 0,
            numRatings: 0,
            tours: []
          };
          bars.push(item);
        }
        item.tours.push(tour.title);
        if (bar.rating) {
          item.rating += bar.rating;
          item.numRatings += 1;
        }
      }
    }

    this.bars = bars
      .map(bar => {
        if (bar.numRatings) {
          bar.rating = bar.rating / bar.numRatings;
        }
        return bar;
      })
      .sort((a, b) => a.bar.title.localeCompare(b.bar.title));
  }
}
