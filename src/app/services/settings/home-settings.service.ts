import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeSettingsService {
  isOpen: boolean = false;
  constructor() { }
}
