import { Component, Input } from '@angular/core';
import { Program } from '../../../interfaces/program';
import { CommonModule } from '@angular/common';
import { ExplorerSettingsService } from '../../../services/explorer-settings.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() program: Program | undefined;
  @Input() darkBackground: boolean = false;
  @Input() isExplorer: boolean = true;

  explorerSettings: ExplorerSettingsService;

  constructor(explorerSettings: ExplorerSettingsService) {
    this.explorerSettings = explorerSettings;
  }
}
