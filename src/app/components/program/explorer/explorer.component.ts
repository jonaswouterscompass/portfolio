import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProgramComponent } from '../program.component';
import { Program } from '../../../interfaces/program';
import { ExplorerSettingsService } from '../../../services/settings/explorer-settings.service';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [ProgramComponent],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {
  @Input() program: Program | undefined;
  explorerSettings: ExplorerSettingsService;

  constructor(explorerSettings: ExplorerSettingsService){
    this.explorerSettings = explorerSettings; 
  }

  toggleSmallIcons(): void{
    this.explorerSettings.isSmallIcons = !this.explorerSettings.isSmallIcons
  }
}
