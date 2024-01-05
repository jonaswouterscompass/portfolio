import { Component, Input } from '@angular/core';
import { Programma } from '../../interfaces/programma';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programma.component.html',
  styleUrl: './programma.component.scss'
})
export class ProgrammaComponent {
  @Input() programma: Programma | undefined;
  @Input() size: 'small' | 'large' | undefined;
  @Input() isExplorer: boolean | undefined;

  changeState(programma:Programma){
    if(programma.options.isOpen === true) {
      programma.options.isMinimized = false;
    }
    else {
      programma.options.isOpen = true;
    }
    
  }
}
