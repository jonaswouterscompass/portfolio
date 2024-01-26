import { Component } from '@angular/core';
import { NotificationService } from '../../../services/data/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { RightBottomService } from '../../../services/settings/right-bottom.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notificationService: NotificationService;
  rightBottomSettings: RightBottomService;

  constructor(notificationService: NotificationService, rightBottomSettings: RightBottomService) {
    this.notificationService = notificationService;
    this.rightBottomSettings = rightBottomSettings;
  }

}
