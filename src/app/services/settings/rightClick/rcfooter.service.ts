import { Injectable } from '@angular/core';
import { Place } from '../../../interfaces/position';

@Injectable({
  providedIn: 'root'
})
export class RCFooterService {
  isOpen: boolean = false;
  position: Place = { left: 0, top: 0 }

  setIsOpen(bool: boolean): void {
    this.isOpen = bool;
  }
  constructor() { }
}
