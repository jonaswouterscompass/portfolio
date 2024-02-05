import { Component } from '@angular/core';
import { NotificationService } from '../../../services/data/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { LcIsOpenService } from '../../../services/settings/leftClick/lc-is-open.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  constructor(public notificationService: NotificationService, public lcIsOpen: LcIsOpenService) {
  }

}
