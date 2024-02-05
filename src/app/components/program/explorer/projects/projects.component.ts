import { Component, Input } from '@angular/core';
import { Program } from '../../../../interfaces/program';
import { ProgramService } from '../../../../services/data/program.service';
import { ExplorerComponent } from '../explorer.component';
import { IconComponent } from '../../icon/icon.component';
import { CommonModule } from '@angular/common';
import { ExplorerSizeService } from '../../../../services/settings/explorer/explorer-size.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ExplorerComponent, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() program: Program | undefined;

  constructor(
    public programService: ProgramService, 
    public explorerSettings: ExplorerSizeService) {
  }
}
