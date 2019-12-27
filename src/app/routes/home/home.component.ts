import { Component, OnInit } from '@angular/core';
import { padStart } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private hiddenUntil = new Date('2019-12-26T19:20:00');

  public showCountdown: boolean;
  public days: string;
  public hours: string;
  public minutes: string;
  public seconds: string;

  constructor() {}

  ngOnInit() {
    this.updateCountdown();
  }

  updateCountdown() {
    const now = new Date();

    const difference = this.hiddenUntil.valueOf() - now.valueOf();

    if (difference > 0) {
      this.days = padStart(`${Math.floor(difference / (1000 * 60 * 60 * 24))}`, 2, '0');
      this.hours = padStart(`${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`, 2, '0');
      this.minutes = padStart(`${Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}`, 2, '0');
      this.seconds = padStart(`${Math.floor((difference % (1000 * 60)) / 1000)}`, 2, '0');

      this.showCountdown = true;
      setTimeout(() => {
        this.updateCountdown();
      }, 1000);
    } else {
      this.showCountdown = false;
    }
  }
}
