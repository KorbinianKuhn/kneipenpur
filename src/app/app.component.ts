import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer, Meta } from '@angular/platform-browser';

const CUSTOM_ICONS = ['logo', 'location'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(meta: Meta, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    meta.addTags([
      { name: 'author', content: 'Kneipenpur' },
      {
        name: 'description',
        content: `The art of pub crawling`
      },
      {
        name: `keywords`,
        content: `Bar Kneipe Tour`
      }
    ]);

    for (const icon of CUSTOM_ICONS) {
      this.matIconRegistry.addSvgIcon(
        `custom_${icon}`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${icon}.svg`)
      );
    }
  }
}
