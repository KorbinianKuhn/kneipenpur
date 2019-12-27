import { Component, OnInit } from '@angular/core';
import { appVersion } from 'src/app/constants/version';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public name: string =
    '\x6e\x68\x75\x4b\x20\x6e\x61\x69\x6e\x69\x62\x72\x6f\x4b\x20\x2c\x20\x72\x65\x6c\x6c\x65\x4b\x20\x73\x65\x6e\x6e\x61\x48';
  public address: string = '\x35\x39\x20\x2e\x72\x74\x73\x67\x72\x65\x62\x6e\x65\x74\x75\x47';
  public city: string = '\x74\x72\x61\x67\x74\x74\x75\x74\x53';
  public email: string = '\x65\x64\x2e\x72\x75\x70\x6e\x65\x70\x69\x65\x6e\x6b\x40\x6f\x66\x6e\x69';
  public version = appVersion;

  constructor() {}

  ngOnInit() {}
}
