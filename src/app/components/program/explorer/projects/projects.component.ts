import { Component, Input } from '@angular/core';
import { Program } from '../../../../interfaces/program';
import { ProgramService } from '../../../../services/program.service';
import { ExplorerComponent } from '../explorer.component';
import { IconComponent } from '../../icon/icon.component';
import { CommonModule } from '@angular/common';
import { ExplorerSettingsService } from '../../../../services/explorer-settings.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ExplorerComponent, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() program: Program | undefined;
  programService: ProgramService;
  explorerSettings: ExplorerSettingsService;

  constructor(programService: ProgramService, explorerSettings: ExplorerSettingsService) {
    this.programService = programService;
    this.explorerSettings = explorerSettings;
  }
}
