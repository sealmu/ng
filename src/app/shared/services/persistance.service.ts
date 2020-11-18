import { Injectable } from '@angular/core';

Injectable();
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.log('failed persist data: ', err);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (err) {
      console.log('failed retrieve persisted data: ', err);
      return null;
    }
  }
}
