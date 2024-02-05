import { Injectable } from '@angular/core';
import { HasClassService } from '../../helpers/hasClass/has-class.service';

@Injectable({
  providedIn: 'root'
})
export class LcIsOpenService {
  notificationIsOpen: boolean = false;
  settingsIsOpen: boolean = false;
  homeIsOpen: boolean = false;

  constructor(private hasClassHelper: HasClassService){}

  toggleNotifications(): void {
    this.notificationIsOpen = !this.notificationIsOpen;
    this.settingsIsOpen = false;
    this.homeIsOpen = false;
  }

  toggleSettings(): void {
    this.notificationIsOpen = false;
    this.settingsIsOpen = !this.settingsIsOpen;
    this.homeIsOpen = false;
  }

  toggleStart(): void {
    this.notificationIsOpen = false;
    this.settingsIsOpen = false;
    this.homeIsOpen = !this.homeIsOpen;
  }

  closeAll(): void {
    this.notificationIsOpen = false;
    this.settingsIsOpen = false;
    this.homeIsOpen = false;
  }

  openCorrect(element: HTMLElement) {
    if(this.hasClassHelper.hasClass(element, 'footer')) {
      if(this.hasClassHelper.hasClass(element, 'start')) this.toggleStart();
      if(this.hasClassHelper.hasClass(element, 'settings')) this.toggleSettings();
      if(this.hasClassHelper.hasClass(element, 'notifications')) this.toggleNotifications();
    } else {
      if(
        !this.hasClassHelper.hasClass(element, 'home') && 
        !this.hasClassHelper.hasClass(element, 'settings') && 
        !this.hasClassHelper.hasClass(element, 'notifications')
        ){
        this.closeAll();
      }
    }
  }
}
