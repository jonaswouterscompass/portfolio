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
    
    if (this.hasClass(clickedElement, 'openPage')) this.handleFooterIconContextMenu(event);
    else if (this.hasClass(clickedElement, 'program')) this.handleProgramContextMenu(event);
    else if (this.hasClass(clickedElement, 'footer')) this.handleFooterContextMenu(event);
    else if (this.hasClass(clickedElement, 'home')) this.handleHomeContextMenu(event);
    else this.handleDesktopContextMenu(event);

    event.preventDefault();
  }

  /* All leftclick menus */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    
    this.rcIsOpen.closeAll();

    if(this.hasClass(clickedElement, 'footer')) {
      if(this.hasClass(clickedElement, 'start')) this.lcIsOpen.toggleStart();
      if(this.hasClass(clickedElement, 'settings')) this.lcIsOpen.toggleSettings();
      if(this.hasClass(clickedElement, 'notifications')) this.lcIsOpen.toggleNotifications();
    } else {
      if(!this.hasClass(clickedElement, 'home') && !this.hasClass(clickedElement, 'settings') && !this.hasClass(clickedElement, 'notifications')){
        this.lcIsOpen.closeAll();
      }
    }
  }

  private hasClass(element: HTMLElement, className: string): boolean {
    return element.classList.contains(className) || element.closest(`.${className}`) !== null;
  }

  private handleFooterIconContextMenu(event: MouseEvent): void {
    this.rcIsOpen.openRCFooter();
    this.rcIsOpen.position = this.calculatePosition(event, 150, 20);
  }
  
  private handleProgramContextMenu(event: MouseEvent) {
    this.rcIsOpen.closeAll();
  }
  
  private handleFooterContextMenu(event: MouseEvent) {
    this.rcIsOpen.closeAll();
  }

  private handleHomeContextMenu(event: MouseEvent): void {
    this.rcIsOpen.closeAll();
  }

  private handleDesktopContextMenu(event: MouseEvent): void {
    this.rcIsOpen.openRCDesktop();
    this.rcIsOpen.position = this.calculatePosition(event, 150, 65);
  }

  private calculatePosition(event: MouseEvent, width: number, height: number): { left: number; top: number } {
    let left = event.clientX;
    let top = event.clientY;

    left = Math.min(window.innerWidth - width, Math.max(0, left));
    top = Math.min(window.innerHeight - height, Math.max(0, top));

    return { left, top };
  }
}
