import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService, CountdownState } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  public days: string;
  public hours: string;
  public minutes: string;
  public seconds: string;

  private subscription: Subscription;

  constructor(private countdownService: CountdownService) {}

  ngOnInit() {
    this.subscription = this.countdownService.changed.subscribe((event: CountdownState) => {
      this.days = event.days;
      this.hours = event.hours;
      this.minutes = event.minutes;
      this.seconds = event.seconds;
    });
    this.days = this.countdownService.state.days;
    this.hours = this.countdownService.state.hours;
    this.minutes = this.countdownService.state.minutes;
    this.seconds = this.countdownService.state.seconds;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
