import { Component, OnInit } from '@angular/core';
import { CountdownService, CountdownState } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private countdownService: CountdownService) {}

  public showCountdown: boolean = false;

  ngOnInit() {
    this.showCountdown = this.countdownService.state.show;
    this.countdownService.changed.subscribe((event: CountdownState) => {
      this.showCountdown = event.show;
    });
  }
}
