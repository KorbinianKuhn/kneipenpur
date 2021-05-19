import { Injectable } from '@angular/core';
import { StorageKey } from '../enums/storage.enum';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private getFromStorage(type: 'session' | 'local', key: StorageKey, defaultValue: any = null): any {
    const value = type === 'session' ? sessionStorage.getItem(key) : localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    try {
      return JSON.parse(value);
    } catch (err) {
      return defaultValue;
    }
  }

  private storeInStorage(type: 'session' | 'local', key: StorageKey, value): void {
    type === 'session'
      ? sessionStorage.setItem(key, JSON.stringify(value))
      : localStorage.setItem(key, JSON.stringify(value));
  }

  getFromSessionStorage(key: StorageKey, defaultValue: any = null): any {
    return this.getFromStorage('session', key, defaultValue);
  }

  getFromLocalStorage(key: StorageKey, defaultValue: any = null): any {
    return this.getFromStorage('local', key, defaultValue);
  }

  storeInSessionStorage(key: StorageKey, value: any): void {
    this.storeInStorage('session', key, value);
  }

  storeInLocalStorage(key: StorageKey, value: any): void {
    this.storeInStorage('local', key, value);
  }

  removeFromSessionStorage(key: StorageKey): void {
    sessionStorage.removeItem(key);
  }

  removeFromLocalStorage(key: StorageKey): void {
    localStorage.removeItem(key);
  }

  getFromSessionOrLocalStorage(key: StorageKey, defaultValue: any = null): any {
    return this.getFromSessionStorage(key) || this.getFromLocalStorage(key) || defaultValue;
  }

  removeFromSessionAndLocalStorage(key: StorageKey): void {
    this.removeFromSessionStorage(key);
    this.removeFromLocalStorage(key);
  }
}
