import { Injectable } from '@angular/core';
import { Place, Position } from '../../../interfaces/position';

@Injectable({
  providedIn: 'root'
})
export class RCDesktopService {
  isOpen: boolean = false;
  position: Place = { left: 0, top: 0 }

  setIsOpen(bool: boolean): void {
    this.isOpen = bool;
  }
  constructor() { }
}
