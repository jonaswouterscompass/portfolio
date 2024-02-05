import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/settings/language/language.service';
import { RcIsOpenService } from './services/settings/rightClick/rc-is-open.service';
import { LcIsOpenService } from './services/settings/leftClick/lc-is-open.service';

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
    private rcIsOpen: RcIsOpenService,
    private lcIsOpen: LcIsOpenService,
    private languageService: LanguageService,
    ) {
    const storedLanguage: string | null = localStorage.getItem('userLanguage')
    this.languageService.switchLanguage(storedLanguage || 'nl');
  }

  /* All rightclick menus */
  @HostListener('document:contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    this.lcIsOpen.closeAll();
    this.rcIsOpen.openCorrect(event, clickedElement);

    event.preventDefault();
  }

  /* All leftclick menus */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    
    this.rcIsOpen.closeAll();
    this.lcIsOpen.openCorrect(clickedElement);
  }
}
