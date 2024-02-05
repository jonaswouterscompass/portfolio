import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LcIsOpenService {
  notificationIsOpen: boolean = false;
  settingsIsOpen: boolean = false;
  homeIsOpen: boolean = false;

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
}
