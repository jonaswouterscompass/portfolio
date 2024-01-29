import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/settings/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-settings.component.html',
  styleUrl: './language-settings.component.scss'
})
export class LanguageSettingsComponent {
  constructor(public languageService: LanguageService){}

}
