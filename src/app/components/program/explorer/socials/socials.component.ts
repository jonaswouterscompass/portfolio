import { Component, Input } from '@angular/core';
import { ExplorerComponent } from '../explorer.component';
import { Program } from '../../../../interfaces/program';
import { IconComponent } from '../../icon/icon.component';
import { ProgramService } from '../../../../services/data/program.service';
import { CommonModule } from '@angular/common';
import { SocialsSettingsService } from '../../../../services/settings/explorer/socials-settings.service';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule, ExplorerComponent, IconComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  @Input() program: Program | undefined;
  programService: ProgramService;
  socialsSettings: SocialsSettingsService

  constructor(programService: ProgramService, socialsSettings: SocialsSettingsService) {
    this.programService = programService;
    this.socialsSettings = socialsSettings;
  }
}
