import { Component } from '@angular/core';
import { BackgroundSettingsComponent } from './background-settings/background-settings.component';
import { RightBottomService } from '../../../services/settings/right-bottom.service';
import { LanguageSettingsComponent } from './language-settings/language-settings.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BackgroundSettingsComponent, LanguageSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  rightBottomSettings: RightBottomService;

  constructor(rightBottomSettings: RightBottomService) {
    this.rightBottomSettings = rightBottomSettings;
  }
}
