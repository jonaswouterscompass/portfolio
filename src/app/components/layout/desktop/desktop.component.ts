import { Component } from '@angular/core';
import { ProgramService } from '../../../services/program.service';
import { Program } from '../../../interfaces/program';
import { IconComponent } from '../../program/icon/icon.component';
import { SocialsComponent } from '../../program/explorer/socials/socials.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [IconComponent, SocialsComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  programService: ProgramService | undefined;
  constructor(programService: ProgramService){
    this.programService = programService;
  }

}
