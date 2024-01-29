import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: 'NL' | 'FR' | 'EN' = 'NL';

  switchLanguage(lang: 'NL' | 'FR' | 'EN'): void {
    this.currentLanguage = lang;
  }
}
