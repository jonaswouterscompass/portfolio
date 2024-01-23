import { Component } from '@angular/core';
import { ProgramService } from '../../../services/program.service';
import { CommonModule } from '@angular/common';
import { Program } from '../../../interfaces/program';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  programService: ProgramService;

  constructor(programService: ProgramService){
    this.programService = programService;
  }

  toggleMinimizeProgram(program: Program):void{
    program.options.isMinimized = !program.options.isMinimized;
    program.options.zIndex = ++this.programService.zIndex;
  }
}
