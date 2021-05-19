import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
import { CountdownService, CountdownState } from './services/countdown.service';

const CUSTOM_ICONS = ['logo', 'location'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showMenu: boolean;

  constructor(
    meta: Meta,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private swUpdate: SwUpdate,
    private countdownService: CountdownService
  ) {
    meta.addTags([
      { name: 'author', content: 'Kneipenpur' },
      {
        name: 'description',
        content: `The art of pub crawling`,
      },
      {
        name: `keywords`,
        content: `Bar Kneipe Tour`,
      },
    ]);

    for (const icon of CUSTOM_ICONS) {
      this.matIconRegistry.addSvgIcon(
        `custom_${icon}`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${icon}.svg`)
      );
    }

    this.swUpdate.available.subscribe(() => {
      swUpdate
        .activateUpdate()
        .then(() => {
          console.log('pwa update activated');
          document.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    });

    this.showMenu = !this.countdownService.state.show;
    this.countdownService.changed.subscribe((event: CountdownState) => {
      this.showMenu = !event.show;
    });
  }
}
