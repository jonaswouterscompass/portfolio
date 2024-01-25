import { Component, Input } from '@angular/core';
import { Notification } from '../../../../interfaces/notification';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  @Input() notification: Notification | undefined;
  notificationService: NotificationService;
  constructor(notificationService: NotificationService){
    this.notificationService = notificationService;
  }
  deleteNotification(index: string){
    this.notificationService.notifications = this.notificationService.notifications.filter(obj => obj.index !== index)
  }
}
