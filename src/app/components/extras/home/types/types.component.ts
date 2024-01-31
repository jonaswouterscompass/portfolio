import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Program } from '../../../../interfaces/program';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './types.component.html',
  styleUrl: './types.component.scss'
})
export class TypesComponent {
  @Input() types: { type: string; programs: Program[] }[] = [];
  @Output() selectProgramType = new EventEmitter<string>();

  setNewProgramType(type: string) {
    this.selectProgramType.emit(type);
  }
}
