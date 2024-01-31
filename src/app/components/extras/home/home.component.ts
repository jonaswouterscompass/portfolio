import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../../../interfaces/program';
import { ProgramService } from '../../../services/data/program.service';
import { CommonModule } from '@angular/common';
import { HomeSettingsService } from '../../../services/settings/home-settings.service';
import { TypesComponent } from './types/types.component';
import { ProgramsOfTypeComponent } from './programs-of-type/programs-of-type.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TypesComponent, ProgramsOfTypeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedProgram: string | undefined;

  constructor(public programService: ProgramService, public homeSettings: HomeSettingsService) {}

  setNewProgramType(type: string){
    this.selectedProgram = type;
  }
}
