import { Injectable } from '@angular/core';
import { TOURS } from '../constants/tour.constants';
import { StoredTourBar, Tour } from '../interfaces/common.interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tours: Tour[];

  constructor(private storageService: StorageService) {
    const store: StoredTourBar[] = this.storageService.getFromLocalStorage('bars', []);

    this.tours = TOURS;

    for (const bar of store) {
      this.tours.find(o => o.id === bar.tourId).bars.find(b => b.id === bar.barId).checked = bar.checked;
    }
  }

  getTourList(): Tour[] {
    return this.tours;
  }

  getTourDetail(id: string): Tour {
    return this.tours.find(o => o.id === id);
  }

  saveState() {
    const store: StoredTourBar[] = [];
    for (const tour of this.tours) {
      for (const bar of tour.bars) {
        store.push({
          tourId: tour.id,
          barId: bar.id,
          checked: bar.checked
        });
      }
    }

    console.log('saveState');

    this.storageService.storeInLocalStorage('bars', store);
  }
}
