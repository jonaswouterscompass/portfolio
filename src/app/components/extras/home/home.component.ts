import { Component, Input, OnInit } from '@angular/core';
import { ProgramService } from '../../../services/data/program.service';
import { CommonModule } from '@angular/common';
import { TypesComponent } from './types/types.component';
import { ProgramsOfTypeComponent } from './programs-of-type/programs-of-type.component';
import { CIsOpenService } from '../../../services/settings/click/c-is-open.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TypesComponent, ProgramsOfTypeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedProgram: string | undefined;

  constructor(public programService: ProgramService, public clickService: CIsOpenService) {}

  setNewProgramType(type: string){
    this.selectedProgram = type;
  }
}
