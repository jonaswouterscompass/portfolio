import { Component } from '@angular/core';
import { ProgramService } from '../../../services/data/program.service';
import { IconComponent } from '../../program/icon/icon.component';
import { SocialsComponent } from '../../program/explorer/socials/socials.component';
import { ProjectsComponent } from '../../program/explorer/projects/projects.component';
import { SettingsComponent } from '../../extras/settings/settings.component';
import { BackgroundService as BackgroundService } from '../../../services/data/background.service';
import { NotificationsComponent } from '../../extras/notifications/notifications.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [IconComponent, SocialsComponent, ProjectsComponent, SettingsComponent, NotificationsComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  programService: ProgramService;
  backgroundService: BackgroundService
  constructor(programService: ProgramService, backgroundService: BackgroundService){
    this.programService = programService;
    this.backgroundService = backgroundService;
    backgroundService.getBackground();
  }
}
