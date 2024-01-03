import { Component, Input } from '@angular/core';
import { Programma } from '../../interfaces/programma';

@Component({
  selector: 'app-programma',
  standalone: true,
  imports: [],
  templateUrl: './programma.component.html',
  styleUrl: './programma.component.scss'
})
export class ProgrammaComponent {
  @Input() programma: Programma | null = null;

  changeState(programma:Programma){
    if(programma.options.isOpen === true) {
      programma.options.isMinimized = false;
    }
    else {
      programma.options.isOpen = true;
    }
    
  }
}
