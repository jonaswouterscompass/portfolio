import { Component } from '@angular/core';
import { BackgroundSettingsComponent } from './background-settings/background-settings.component';
import { LanguageSettingsComponent } from './language-settings/language-settings.component';
import { CIsOpenService } from '../../../services/settings/click/c-is-open.service';
import { FullscreenComponent } from './fullscreen/fullscreen.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BackgroundSettingsComponent, LanguageSettingsComponent, FullscreenComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(public clickService: CIsOpenService) {
  }
}
