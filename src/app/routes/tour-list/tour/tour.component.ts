import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Bar, Tour } from 'src/app/interfaces/common.interfaces';
import { DataService } from 'src/app/services/data.service';
import { TourInvitationDialogComponent } from '../../../components/tour-invitation-dialog/tour-invitation-dialog.component';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class TourComponent implements OnInit {
  public tour: Tour;
  public description: SafeHtml;

  constructor(private route: ActivatedRoute, private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.tour = this.dataService.getTourDetail(this.route.snapshot.params.id);
  }

  onBarChanged(bar: Bar, state: boolean) {
    bar.checked = state;
    this.dataService.saveState();
  }

  onRatingChanged(bar: Bar, rating: number) {
    bar.rating = rating;
    this.dataService.saveState();
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  showInvitation() {
    this.dialog.open(TourInvitationDialogComponent, {
      data: {
        tour: this.tour,
      },
    });
  }
}
