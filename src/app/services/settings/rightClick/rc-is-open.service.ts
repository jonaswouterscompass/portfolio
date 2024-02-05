import { Injectable } from '@angular/core';
import { Place } from '../../../interfaces/position';

@Injectable({
  providedIn: 'root'
})
export class RcIsOpenService {
  rcFooterIsOpen: boolean = false;
  rcDesktopIsOpen: boolean = false;
  position: Place = { left: 0, top: 0 }
  
  openRCFooter(): void {
    this.rcFooterIsOpen = true;
    this.rcDesktopIsOpen = false;
  }

  openRCDesktop(): void {
    this.rcDesktopIsOpen = true;
    this.rcFooterIsOpen = false;
  }

  closeAll(): void {
    this.rcDesktopIsOpen = false;
    this.rcFooterIsOpen = false;
  }
}
