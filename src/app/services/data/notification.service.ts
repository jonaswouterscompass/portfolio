import { Injectable } from '@angular/core';
import { Notification } from '../../interfaces/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: Notification[] = [];
  constructor() {
    setTimeout(() => {
      this.notifications.push({index: "0", name: "Fullscreen", description: ["Do this fullscreen please", "pleeeeeaaaaaasssssse"]});
    }, 2500)
  }
}
