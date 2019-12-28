import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Output() changed: EventEmitter<number> = new EventEmitter();

  @Input() rating: number;

  public stars: number[] = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {}

  onClick(star: number) {
    this.rating = star;
    this.changed.emit(star);
  }

  onPress() {
    this.rating = null;
    this.changed.emit(null);
  }
}
