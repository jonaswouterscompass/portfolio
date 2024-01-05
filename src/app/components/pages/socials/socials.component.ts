import { Component, Input } from '@angular/core';
import { ProgramComponent } from '../../program/program.component';
import { Programma } from '../../../interfaces/programma';
import { ExplorerComponent } from '../../program/explorer/explorer.component';
import { CommonModule } from '@angular/common';
import { ExplorerSettingsService } from '../../../services/explorer-settings.service';
import { ProgrammaService } from '../../../services/programma.service';
import { ProgrammaComponent } from '../../programma/programma.component';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule, ProgramComponent, ExplorerComponent, ProgrammaComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent{
  @Input() programma: Programma | undefined;
  explorerSettings: ExplorerSettingsService;
  programmaService: ProgrammaService;
  
  constructor(explorerSettingsService: ExplorerSettingsService, programmaService: ProgrammaService){
    this.explorerSettings = explorerSettingsService;
    this.programmaService = programmaService;
  }
}
