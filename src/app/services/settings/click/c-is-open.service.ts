import { Injectable } from '@angular/core';
import { HasClassService } from '../../helpers/hasClass/has-class.service';
import { Place } from '../../../interfaces/position';

@Injectable({
  providedIn: 'root'
})
export class CIsOpenService {
  /* Left click */
  lCNotificationIsOpen: boolean = false;
  lCSettingsIsOpen: boolean = false;
  lCHomeIsOpen: boolean = false;
  /* Right click */
  rCFooterIsOpen: boolean = false;
  rCDesktopIsOpen: boolean = false;
  rCPosition: Place = { left: 0, top: 0 };

  constructor(private hasClassHelper: HasClassService){}

  toggleLCNotifications(): void {
    this.lCNotificationIsOpen = !this.lCNotificationIsOpen;
    this.lCSettingsIsOpen = false;
    this.lCHomeIsOpen = false;
  }

  toggleLCSettings(): void {
    this.lCNotificationIsOpen = false;
    this.lCSettingsIsOpen = !this.lCSettingsIsOpen;
    this.lCHomeIsOpen = false;
  }

  toggleLCStart(): void {
    this.lCNotificationIsOpen = false;
    this.lCSettingsIsOpen = false;
    this.lCHomeIsOpen = !this.lCHomeIsOpen;
  }

  closeAllLC(): void {
    this.lCNotificationIsOpen = false;
    this.lCSettingsIsOpen = false;
    this.lCHomeIsOpen = false;
  }

  openCorrectLC(element: HTMLElement) {
    if(this.hasClassHelper.hasClass(element, 'footer')) {
      if(this.hasClassHelper.hasClass(element, 'start')) this.toggleLCStart();
      if(this.hasClassHelper.hasClass(element, 'settings')) this.toggleLCSettings();
      if(this.hasClassHelper.hasClass(element, 'notifications')) this.toggleLCNotifications();
    } else {
      if(
        !this.hasClassHelper.hasClass(element, 'home') && 
        !this.hasClassHelper.hasClass(element, 'settings') && 
        !this.hasClassHelper.hasClass(element, 'notifications')
        ){
          this.closeAllLC();
      }
    }
  }


  openRCFooter(): void {
    this.rCFooterIsOpen = true;
    this.rCDesktopIsOpen = false;
  }

  openRCDesktop(): void {
    this.rCDesktopIsOpen = true;
    this.rCFooterIsOpen = false;
  }

  closeAllRC(): void {
    this.rCDesktopIsOpen = false;
    this.rCFooterIsOpen = false;
  }

  openCorrectRC(event: MouseEvent) {   
    const element = event.target as HTMLElement;

    if(
      this.hasClassHelper.hasClass(element, 'home') ||
      this.hasClassHelper.hasClass(element, 'settings') ||
      this.hasClassHelper.hasClass(element, 'notifications')
      ) return
    this.closeAllLC();
    if (this.hasClassHelper.hasClass(element, 'openPage')) this.handleFooterIconContextMenu(event);
    else if (this.hasClassHelper.hasClass(element, 'program')) this.closeAllRC();
    else if (this.hasClassHelper.hasClass(element, 'footer')) this.closeAllRC();
    else if (this.hasClassHelper.hasClass(element, 'home')) this.closeAllRC();
    else this.handleDesktopContextMenu(event);
  }

  private handleFooterIconContextMenu(event: MouseEvent): void {
    this.openRCFooter();
    this.rCPosition = this.calculateRCPosition(event, 150, 20);
  }

  private handleDesktopContextMenu(event: MouseEvent): void {
    this.openRCDesktop();
    this.rCPosition = this.calculateRCPosition(event, 150, 65);
  }

  private calculateRCPosition(event: MouseEvent, width: number, height: number): { left: number; top: number } {
    let left = event.clientX;
    let top = event.clientY;

    left = Math.min(window.innerWidth - width, Math.max(0, left));
    top = Math.min(window.innerHeight - height, Math.max(0, top));

    return { left, top };
  }
}
