import { Injectable } from '@angular/core';
import { Notification } from '../interfaces/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: Notification[] = [
    {index: "0", name: "Fullscreen", description: "Do this fullscreen please"}
  ]
  constructor() { }
}
