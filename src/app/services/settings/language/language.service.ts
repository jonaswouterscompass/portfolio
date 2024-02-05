import { AfterViewChecked, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: string = this.translocoService.getActiveLang();

  constructor(private translocoService: TranslocoService) {}

  switchLanguage(lang: string): void {
    if(lang !== "nl" && lang !== "en" && lang !== 'fr') return
    this.translocoService.setActiveLang(lang);
    this.currentLanguage = lang;
    localStorage.setItem('userLanguage', lang);
  }
}
