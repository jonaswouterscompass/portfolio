import { Component, Input } from '@angular/core';
import { Program } from '../../../../interfaces/program';
import { ProgramService } from '../../../../services/data/program.service';

@Component({
  selector: 'app-programs-of-type',
  standalone: true,
  imports: [],
  templateUrl: './programs-of-type.component.html',
  styleUrl: './programs-of-type.component.scss'
})
export class ProgramsOfTypeComponent {
  @Input() type: { type: string; programs: Program[] } | undefined;
  constructor(public programService: ProgramService) {}
}
