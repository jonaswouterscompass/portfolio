import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RCDesktopService } from './services/settings/rightClick/rcdesktop.service';
import { RCFooterService } from './services/settings/rightClick/rcfooter.service';
import { LanguageService } from './services/settings/language.service';
import { NotificationService } from './services/data/notification.service';
import { RightBottomService } from './services/settings/right-bottom.service';
import { HomeSettingsService } from './services/settings/home-settings.service';

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
    private rcdesktop: RCDesktopService,
    private rcfooter: RCFooterService,
    private languageService: LanguageService,
    private rightBottom: RightBottomService,
    private homeSettings: HomeSettingsService
    ) {
    const storedLanguage: string | null = localStorage.getItem('userLanguage')
    this.languageService.switchLanguage(storedLanguage || 'nl');
  }

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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    if(this.rcdesktop.isOpen) this.rcdesktop.isOpen = false;
    if(this.rcfooter.isOpen) this.rcfooter.isOpen = false;

    if(this.hasClass(clickedElement, 'footer')) {
      console.log("footer")
      if(this.hasClass(clickedElement, 'start')){
        console.log("start")
        this.homeSettings.isOpen = !this.homeSettings.isOpen;
        this.rightBottom.settingsOpen = false;
        this.rightBottom.notificationOpen = false;
      }
      if(this.hasClass(clickedElement, 'settings')) {
        console.log("settings")
        this.rightBottom.settingsOpen = !this.rightBottom.settingsOpen;
        this.homeSettings.isOpen = false;
        this.rightBottom.notificationOpen = false;
      }
      if(this.hasClass(clickedElement, 'notifications')) {
        console.log("notification")
        this.rightBottom.notificationOpen = !this.rightBottom.notificationOpen;
        this.homeSettings.isOpen = false;
        this.rightBottom.settingsOpen = false;
      }
      return
    }
    if(!this.hasClass(clickedElement, 'home')) this.homeSettings.isOpen = false;
    if(!this.hasClass(clickedElement, 'settings')) this.rightBottom.settingsOpen = false;
    if(!this.hasClass(clickedElement, 'notification')) this.rightBottom.notificationOpen = false;

  }

  private hasClass(element: HTMLElement, className: string): boolean {
    return element.classList.contains(className) || element.closest(`.${className}`) !== null;
  }

  private handleFooterIconContextMenu(event: MouseEvent): void {
    this.rcfooter.setIsOpen(true);
    this.rcdesktop.setIsOpen(false);
    this.rcfooter.position = this.calculatePosition(event, 150, 20);
  }
  
  private handleProgramContextMenu(event: MouseEvent) {
    this.rcfooter.setIsOpen(false);
    this.rcdesktop.setIsOpen(false);
  }
  
  private handleFooterContextMenu(event: MouseEvent) {
    this.rcfooter.setIsOpen(false);
    this.rcdesktop.setIsOpen(false);
  }

  private handleHomeContextMenu(event: MouseEvent): void {
    this.rcfooter.setIsOpen(false);
    this.rcdesktop.setIsOpen(false);
  }

  private handleDesktopContextMenu(event: MouseEvent): void {
    this.rcdesktop.setIsOpen(true);
    this.rcfooter.setIsOpen(false);
    this.rcdesktop.position = this.calculatePosition(event, 150, 85);
  }

  private calculatePosition(event: MouseEvent, width: number, height: number): { left: number; top: number } {
    let left = event.clientX;
    let top = event.clientY;

    left = Math.min(window.innerWidth - width, Math.max(0, left));
    top = Math.min(window.innerHeight - height, Math.max(0, top));

    return { left, top };
  }
}
