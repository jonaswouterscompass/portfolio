import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Programma } from '../../interfaces/programma';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {
  @Input() programma: Programma | undefined;

  closeProgram() {
    if(this.programma){
      this.programma.options.isOpen = false;
    }
  }
  minimizeProgram(){
    if(this.programma){
      this.programma.options.isMinimized = true;
    }
  }
}
