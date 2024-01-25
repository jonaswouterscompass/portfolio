import { Component } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

}
