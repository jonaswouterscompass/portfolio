import { Component, Input } from '@angular/core';
import { ExplorerComponent } from '../explorer.component';
import { Program } from '../../../../interfaces/program';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [ExplorerComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  @Input() program: Program | undefined;

  onCloseProgram(program: Program):void {
    program.options.isOpen = false;
  }

  onMinimizedProgram(program: Program):void {
    program.options.isMinimized = true;
  }
}
