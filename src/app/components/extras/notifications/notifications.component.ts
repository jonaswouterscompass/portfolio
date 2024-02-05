import { Component } from '@angular/core';
import { NotificationService } from '../../../services/data/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { CIsOpenService } from '../../../services/settings/click/c-is-open.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  constructor(public notificationService: NotificationService, public clickService: CIsOpenService) {
  }

}
