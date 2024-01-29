import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RCDesktopService } from './services/settings/rightClick/rcdesktop.service';
import { RCFooterService } from './services/settings/rightClick/rcfooter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  rcdesktop: RCDesktopService;
  rcfooter: RCFooterService;

  constructor(rcdesktop: RCDesktopService, rcfooter: RCFooterService) {
    this.rcdesktop = rcdesktop;
    this.rcfooter = rcfooter;
  }

  @HostListener('document:contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    if (!this.hasOpenPageClass(clickedElement)) {
      this.rcdesktop.setIsOpen(true)
      this.rcfooter.setIsOpen(false)
      this.rcdesktop.position = {left: event.clientX, top: event.clientY}
      if(this.rcdesktop.position.left + 150 > window.innerWidth){
        this.rcdesktop.position.left = window.innerWidth - 150
      }
      if(this.rcdesktop.position.top + 20 * 1 > window.innerHeight - 45){
        this.rcdesktop.position.top = window.innerHeight - 45 - 20 * 1
      } 

    } else {
      this.rcfooter.setIsOpen(true)
      this.rcdesktop.setIsOpen(false)
      this.rcfooter.position = {left: event.clientX, top: event.clientY}
      if(this.rcfooter.position.left + 150 > window.innerWidth){
        this.rcfooter.position.left = window.innerWidth - 150
      }
      if(this.rcfooter.position.top + 20 * 1 > window.innerHeight){
        this.rcfooter.position.top = window.innerHeight - 20 * 1
      } 

    }
    event.preventDefault();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if(this.rcdesktop.isOpen) this.rcdesktop.setIsOpen(false)
    if(this.rcfooter.isOpen) this.rcfooter.setIsOpen(false)
  }

  private hasOpenPageClass(element: HTMLElement): boolean {
    return element.classList.contains('openPage') || element.closest('.openPage') !== null;
  }
}
