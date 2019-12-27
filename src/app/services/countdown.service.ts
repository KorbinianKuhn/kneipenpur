import { EventEmitter, Injectable, Output } from '@angular/core';
import { padStart } from 'lodash';

export interface CountdownState {
  show: boolean;
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  @Output() changed: EventEmitter<CountdownState> = new EventEmitter();

  private hiddenUntil = new Date('2019-12-27T14:19:00');

  public state: CountdownState;

  constructor() {
    this.updateCountdown();
  }

  private updateCountdown() {
    const now = new Date();

    const difference = this.hiddenUntil.valueOf() - now.valueOf();

    if (difference > 0) {
      this.state = {
        show: true,
        days: padStart(`${Math.floor(difference / (1000 * 60 * 60 * 24))}`, 2, '0'),
        hours: padStart(`${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`, 2, '0'),
        minutes: padStart(`${Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}`, 2, '0'),
        seconds: padStart(`${Math.floor((difference % (1000 * 60)) / 1000)}`, 2, '0')
      };

      setTimeout(() => {
        this.updateCountdown();
      }, 1000);
    } else {
      this.state = {
        show: false,
        days: '00',
        hours: '00',
        seconds: '00',
        minutes: '00'
      };
    }

    this.changed.emit(this.state);
  }
}
