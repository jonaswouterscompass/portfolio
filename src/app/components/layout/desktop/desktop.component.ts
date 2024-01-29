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

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [IconComponent, SocialsComponent, ProjectsComponent, SettingsComponent, NotificationsComponent, RCDesktopComponent, RCFooterComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  programService: ProgramService;
  backgroundService: BackgroundService
  rightClickDesktop: RCDesktopService;
  rightClickFooter: RCFooterService;
  constructor(programService: ProgramService, backgroundService: BackgroundService, rightClickDesktop: RCDesktopService, rightClickFooter: RCFooterService){
    this.programService = programService;
    this.backgroundService = backgroundService;
    this.rightClickDesktop = rightClickDesktop;
    this.rightClickFooter = rightClickFooter;
    backgroundService.getBackground();
  }
}
