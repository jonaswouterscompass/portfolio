import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/settings/language/language.service';
import { CIsOpenService } from './services/settings/click/c-is-open.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private clickService: CIsOpenService,
    private languageService: LanguageService,
    ) {
    const storedLanguage: string | null = localStorage.getItem('userLanguage')
    this.languageService.switchLanguage(storedLanguage || 'nl');
  }

  /* All rightclick menus */
  @HostListener('document:contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    this.clickService.openCorrectRC(event);

    event.preventDefault();
  }

  /* All leftclick menus */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    
    this.clickService.closeAllRC();
    this.clickService.openCorrectLC(clickedElement);
  }
}
