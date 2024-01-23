import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProgramComponent } from '../program.component';
import { Program } from '../../../interfaces/program';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [ProgramComponent],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {
  @Input() program: Program | undefined;
  
  @Output() closeProgram: EventEmitter<void> = new EventEmitter<void>();
  onCloseProgram() {
    this.closeProgram.emit();
  }

  @Output() minimizedProgram: EventEmitter<void> = new EventEmitter<void>();
  onMinimizedProgram() {
    this.minimizedProgram.emit();
  }
}
