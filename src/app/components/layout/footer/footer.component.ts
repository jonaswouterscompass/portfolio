import { Component } from '@angular/core';
import { ProgramService } from '../../../services/data/program.service';
import { CommonModule } from '@angular/common';
import { Program } from '../../../interfaces/program';
import { NotificationService } from '../../../services/data/notification.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(
    public programService: ProgramService,
    public notivicationService: NotificationService,
    ){}

  toggleMinimizeProgram(program: Program):void{
    program.options.isMinimized = !program.options.isMinimized;
    program.options.zIndex = ++this.programService.zIndex;
  }
}
