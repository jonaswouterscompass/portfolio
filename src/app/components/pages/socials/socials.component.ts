import { Component, Input } from '@angular/core';
import { ProgramComponent } from '../../program/program.component';
import { Programma } from '../../../interfaces/programma';
import { ExplorerComponent } from '../../program/explorer/explorer.component';
import { CommonModule } from '@angular/common';
import { ExplorerSettingsService } from '../../../services/explorer-settings.service';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule, ProgramComponent, ExplorerComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent{
  @Input() programma: Programma | undefined;
  explorerSettings: ExplorerSettingsService;
  
  constructor(explorerSettingsService: ExplorerSettingsService){
    this.explorerSettings = explorerSettingsService;
  }
}
