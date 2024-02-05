import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HasClassService {
  hasClass(element: HTMLElement, className: string): boolean {
    return element.classList.contains(className) || element.closest(`.${className}`) !== null;
  }
}
