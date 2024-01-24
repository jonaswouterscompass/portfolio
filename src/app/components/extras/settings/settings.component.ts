import { Component } from '@angular/core';
import { SettingSettingsService } from '../../../services/setting-settings.service';
import { BackgroundSettingsComponent } from './background-settings/background-settings.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BackgroundSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  settingSettings: SettingSettingsService;

  constructor(settingSettings: SettingSettingsService) {
    this.settingSettings = settingSettings;
  }
}
