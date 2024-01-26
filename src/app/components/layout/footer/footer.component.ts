import { Component } from '@angular/core';
import { ProgramService } from '../../../services/data/program.service';
import { CommonModule } from '@angular/common';
import { Program } from '../../../interfaces/program';
import { NotificationService } from '../../../services/data/notification.service';
import { RightBottomService } from '../../../services/settings/right-bottom.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  programService: ProgramService;
  rightBottomSettings: RightBottomService;
  notivicationService: NotificationService

  constructor(programService: ProgramService, rightBottomSettings: RightBottomService, notivicationService: NotificationService){
    this.programService = programService;
    this.rightBottomSettings = rightBottomSettings;
    this.notivicationService = notivicationService;
  }

  toggleMinimizeProgram(program: Program):void{
    program.options.isMinimized = !program.options.isMinimized;
    program.options.zIndex = ++this.programService.zIndex;
  }
}
