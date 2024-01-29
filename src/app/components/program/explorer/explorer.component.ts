import { Component, Input, OnInit } from '@angular/core';
import { ProgramComponent } from '../program.component';
import { Program } from '../../../interfaces/program';
import { SocialsSettingsService } from '../../../services/settings/explorer/socials-settings.service';
import { ProjectsSettingsService } from '../../../services/settings/explorer/projects-settings.service';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [ProgramComponent],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent implements OnInit {
  @Input() program?: Program;
  socialsSettings: SocialsSettingsService | undefined;
  projectsSettings: ProjectsSettingsService | undefined;
  isSmall?: boolean;

  constructor(socialsSettings: SocialsSettingsService, projectsSettings: ProjectsSettingsService) {
    this.socialsSettings = socialsSettings;
    this.projectsSettings = projectsSettings;
  }

  ngOnInit(): void {
    if(this.program?.name == 'socials' && this.socialsSettings) {
      this.isSmall = this.socialsSettings.isSmall;
    } else if (this.program?.name == 'projects' && this.projectsSettings) {
      this.isSmall = this.projectsSettings.isSmall;
    }
  }
  toggleSmall(){
    this.isSmall = !this.isSmall
    if(this.program?.name === 'socials') {
      this.socialsSettings?.toggleSmall();
    } else {
      this.projectsSettings?.toggleSmall();
    }
  };
}
