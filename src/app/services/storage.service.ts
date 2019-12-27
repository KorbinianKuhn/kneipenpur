import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  private getFromStorage(type: 'session' | 'local', key: string, defaultValue: any = null): any {
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

  private storeInStorage(type: 'session' | 'local', key: string, value): void {
    type === 'session'
      ? sessionStorage.setItem(key, JSON.stringify(value))
      : localStorage.setItem(key, JSON.stringify(value));
  }

  getFromSessionStorage(key: string, defaultValue: any = null): any {
    return this.getFromStorage('session', key, defaultValue);
  }

  getFromLocalStorage(key: string, defaultValue: any = null): any {
    return this.getFromStorage('local', key, defaultValue);
  }

  storeInSessionStorage(key: string, value: any): void {
    this.storeInStorage('session', key, value);
  }

  storeInLocalStorage(key: string, value: any): void {
    this.storeInStorage('local', key, value);
  }

  removeFromSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  removeFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  getFromSessionOrLocalStorage(key: string, defaultValue: any = null): any {
    return this.getFromSessionStorage(key) || this.getFromLocalStorage(key) || defaultValue;
  }

  removeFromSessionAndLocalStorage(key: string): void {
    this.removeFromSessionStorage(key);
    this.removeFromLocalStorage(key);
  }
}
