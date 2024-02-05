import { Injectable } from '@angular/core';
import { Place } from '../../../interfaces/position';
import { HasClassService } from '../../helpers/hasClass/has-class.service';

@Injectable({
  providedIn: 'root'
})
export class RcIsOpenService {
  rcFooterIsOpen: boolean = false;
  rcDesktopIsOpen: boolean = false;
  position: Place = { left: 0, top: 0 }

  constructor(private hasClassService: HasClassService) {}
  
  openRCFooter(): void {
    this.rcFooterIsOpen = true;
    this.rcDesktopIsOpen = false;
  }

  openRCDesktop(): void {
    this.rcDesktopIsOpen = true;
    this.rcFooterIsOpen = false;
  }

  closeAll(): void {
    this.rcDesktopIsOpen = false;
    this.rcFooterIsOpen = false;
  }

  openCorrect(event: MouseEvent, element: HTMLElement) {    
    if (this.hasClassService.hasClass(element, 'openPage')) this.handleFooterIconContextMenu(event);
    else if (this.hasClassService.hasClass(element, 'program')) this.closeAll();
    else if (this.hasClassService.hasClass(element, 'footer')) this.closeAll();
    else if (this.hasClassService.hasClass(element, 'home')) this.closeAll();
    else this.handleDesktopContextMenu(event);
  }

  private handleFooterIconContextMenu(event: MouseEvent): void {
    this.openRCFooter();
    this.position = this.calculatePosition(event, 150, 20);
  }

  private handleDesktopContextMenu(event: MouseEvent): void {
    this.openRCDesktop();
    this.position = this.calculatePosition(event, 150, 65);
  }

  private calculatePosition(event: MouseEvent, width: number, height: number): { left: number; top: number } {
    let left = event.clientX;
    let top = event.clientY;

    left = Math.min(window.innerWidth - width, Math.max(0, left));
    top = Math.min(window.innerHeight - height, Math.max(0, top));

    return { left, top };
  }
}
