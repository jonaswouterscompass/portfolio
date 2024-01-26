import { Injectable } from '@angular/core';
import { NotificationService } from '../data/notification.service';

@Injectable({
  providedIn: 'root'
})
export class RightBottomService {
  notificationOpen: boolean = false;
  settingsOpen: boolean = false;
  notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  setNotificationOpen(value: boolean){
    if(this.notificationService.notifications.length > 0) {
      this.notificationOpen = value;
      if(value){
        this.settingsOpen = false;
      }
    }
  }

  setSettingsOpen(value: boolean){
    this.settingsOpen = value;
    if(value){
      this.notificationOpen = false;
    }
  }
}
