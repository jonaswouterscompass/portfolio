import { Component } from '@angular/core';
import { BackgroundSettingsComponent } from './background-settings/background-settings.component';
import { RightBottomService } from '../../../services/settings/right-bottom.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BackgroundSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  rightBottomSettings: RightBottomService;

  constructor(rightBottomSettings: RightBottomService) {
    this.rightBottomSettings = rightBottomSettings;
  }
}
