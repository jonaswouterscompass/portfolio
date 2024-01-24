import { Component } from '@angular/core';
import { ProgramService } from '../../../services/program.service';
import { IconComponent } from '../../program/icon/icon.component';
import { SocialsComponent } from '../../program/explorer/socials/socials.component';
import { ProjectsComponent } from '../../program/explorer/projects/projects.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [IconComponent, SocialsComponent, ProjectsComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  programService: ProgramService | undefined;
  constructor(programService: ProgramService){
    this.programService = programService;
  }
}
