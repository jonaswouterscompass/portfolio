import { Component } from '@angular/core';
import { ProgramService } from '../../../services/program.service';
import { CommonModule } from '@angular/common';
import { Program } from '../../../interfaces/program';
import { SettingSettingsService } from '../../../services/setting-settings.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  programService: ProgramService;
  settingSettings: SettingSettingsService;

  constructor(programService: ProgramService, settingSettings: SettingSettingsService){
    this.programService = programService;
    this.settingSettings = settingSettings;
  }

  toggleMinimizeProgram(program: Program):void{
    program.options.isMinimized = !program.options.isMinimized;
    program.options.zIndex = ++this.programService.zIndex;
  }
}
