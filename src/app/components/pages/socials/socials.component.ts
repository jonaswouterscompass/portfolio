import { Component, Input } from '@angular/core';
import { ProgramComponent } from '../../program/program.component';
import { Icon } from '../../../interfaces/icon';
import { ExplorerComponent } from '../../program/explorer/explorer.component';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [ProgramComponent, ExplorerComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent{
  @Input() icon: Icon | undefined;
}
