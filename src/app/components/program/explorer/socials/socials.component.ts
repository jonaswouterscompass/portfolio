import { Component, Input } from '@angular/core';
import { ExplorerComponent } from '../explorer.component';
import { Program } from '../../../../interfaces/program';
import { IconComponent } from '../../icon/icon.component';
import { ProgramService } from '../../../../services/data/program.service';
import { ExplorerSettingsService } from '../../../../services/settings/explorer-settings.service';
import { CommonModule } from '@angular/common';

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
  explorerSettings: ExplorerSettingsService

  constructor(programService: ProgramService, explorerSettings: ExplorerSettingsService) {
    this.programService = programService;
    this.explorerSettings = explorerSettings;
  }
}
