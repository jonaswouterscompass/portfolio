import { Component } from '@angular/core';
import { ProgramService } from '../../../services/data/program.service';
import { CommonModule } from '@angular/common';
import { Program } from '../../../interfaces/program';
import { NotificationService } from '../../../services/data/notification.service';
import { RightBottomService } from '../../../services/settings/right-bottom.service';
import { TranslocoModule } from '@ngneat/transloco';
import { HomeSettingsService } from '../../../services/settings/home-settings.service';

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
    public rightBottomSettings: RightBottomService,
    public notivicationService: NotificationService,
    public homeSettings: HomeSettingsService
    ){}

  toggleMinimizeProgram(program: Program):void{
    program.options.isMinimized = !program.options.isMinimized;
    program.options.zIndex = ++this.programService.zIndex;
  }
}
