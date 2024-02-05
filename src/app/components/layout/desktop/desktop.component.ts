import { Component } from '@angular/core';
import { ProgramService } from '../../../services/data/program.service';
import { IconComponent } from '../../program/icon/icon.component';
import { SocialsComponent } from '../../program/explorer/socials/socials.component';
import { ProjectsComponent } from '../../program/explorer/projects/projects.component';
import { SettingsComponent } from '../../extras/settings/settings.component';
import { BackgroundService as BackgroundService } from '../../../services/settings/background/background.service';
import { NotificationsComponent } from '../../extras/notifications/notifications.component';
import { RCDesktopComponent } from '../../extras/rightClick/rcdesktop/rcdesktop.component';
import { RCFooterComponent } from '../../extras/rightClick/rcfooter/rcfooter.component';
import { HomeComponent } from '../../extras/home/home.component';
import { CIsOpenService } from '../../../services/settings/click/c-is-open.service';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [IconComponent, SocialsComponent, ProjectsComponent, SettingsComponent, NotificationsComponent, RCDesktopComponent, RCFooterComponent, HomeComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  constructor(
    public programService: ProgramService,
    public backgroundService: BackgroundService, 
    public clickService: CIsOpenService
    ){
    backgroundService.getBackground();
  }
}
