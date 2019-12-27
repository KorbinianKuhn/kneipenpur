import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beer-toggle',
  templateUrl: './beer-toggle.component.html',
  styleUrls: ['./beer-toggle.component.scss']
})
export class BeerToggleComponent implements OnInit {
  @Output() changed: EventEmitter<boolean> = new EventEmitter();

  @Input() checked: boolean;

  constructor() {}

  ngOnInit() {}

  onToggle() {
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
}
