import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/settings/language/language.service';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-language-settings',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './language-settings.component.html',
  styleUrl: './language-settings.component.scss'
})
export class LanguageSettingsComponent {
  constructor(public languageService: LanguageService){}

}
