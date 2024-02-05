import { Component, Input } from '@angular/core';
import { ExplorerComponent } from '../explorer.component';
import { Program } from '../../../../interfaces/program';
import { IconComponent } from '../../icon/icon.component';
import { ProgramService } from '../../../../services/data/program.service';
import { CommonModule } from '@angular/common';
import { ExplorerSizeService } from '../../../../services/settings/explorer/explorer-size.service';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule, IconComponent, ExplorerComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  @Input() program: Program | undefined;
  

  constructor(
    public programService: ProgramService,
    public explorerSettings: ExplorerSizeService) {}
}
