import { Component } from '@angular/core';
import { ProgramService } from '../../../services/data/program.service';
import { IconComponent } from '../../program/icon/icon.component';
import { SocialsComponent } from '../../program/explorer/socials/socials.component';
import { ProjectsComponent } from '../../program/explorer/projects/projects.component';
import { SettingsComponent } from '../../extras/settings/settings.component';
import { BackgroundService as BackgroundService } from '../../../services/settings/background.service';
import { NotificationsComponent } from '../../extras/notifications/notifications.component';
import { RCDesktopService } from '../../../services/settings/rightClick/rcdesktop.service';
import { RCDesktopComponent } from '../../extras/rightClick/rcdesktop/rcdesktop.component';
import { RCFooterComponent } from '../../extras/rightClick/rcfooter/rcfooter.component';
import { RCFooterService } from '../../../services/settings/rightClick/rcfooter.service';
import { HomeComponent } from '../../extras/home/home.component';
import { HomeSettingsService } from '../../../services/settings/home-settings.service';

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
    public rightClickDesktop: RCDesktopService, 
    public rightClickFooter: RCFooterService,
    public homeSettings: HomeSettingsService
    ){
    backgroundService.getBackground();
  }
}
