import { Component, Input } from '@angular/core';
import { IconService } from '../../services/icon.service';
import { CommonModule } from '@angular/common';
import { Icon } from '../../interfaces/icon';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {
  @Input() icon: Icon | undefined;

  constructor(private iconService: IconService){}
  closeProgram() {
    if(this.icon){
      this.icon.options.isOpen = false;
    }
  }
  minimizeProgram(){
    if(this.icon){
      this.icon.options.isMinimized = true;
    }
  }
}
