import { Injectable } from '@angular/core';
import { TOURS } from '../constants/tour.constants';
import { StorageKey } from '../enums/storage.enum';
import { StoredTourBar, Tour } from '../interfaces/common.interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public tours: Tour[];

  constructor(private storageService: StorageService) {
    this.tours = TOURS;

    try {
      const store: StoredTourBar[] = this.storageService.getFromLocalStorage(StorageKey.BARS, []);
      for (const bar of store) {
        const tour = this.tours.find((o) => o.id === bar.tourId);
        if (tour) {
          const item = tour.bars.find((b) => b.id === bar.barId);
          if (item) {
            item.checked = bar.checked;
            item.rating = bar.rating;
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  getTourList(): Tour[] {
    return this.tours;
  }

  getTourDetail(id: string): Tour {
    return this.tours.find((o) => o.id === id);
  }

  saveState() {
    const store: StoredTourBar[] = [];
    for (const tour of this.tours) {
      for (const bar of tour.bars) {
        store.push({
          tourId: tour.id,
          barId: bar.id,
          checked: bar.checked,
          rating: bar.rating,
        });
      }
    }

    this.storageService.storeInLocalStorage(StorageKey.BARS, store);
  }
}
