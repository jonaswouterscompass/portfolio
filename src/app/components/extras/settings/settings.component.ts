import { Component } from '@angular/core';
import { BackgroundSettingsComponent } from './background-settings/background-settings.component';
import { LanguageSettingsComponent } from './language-settings/language-settings.component';
import { LcIsOpenService } from '../../../services/settings/leftClick/lc-is-open.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BackgroundSettingsComponent, LanguageSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(public lcIsopen: LcIsOpenService) {
  }
}
