import { Injectable } from '@angular/core';
import { Icon } from '../interfaces/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  icons: Icon[] = [
    {
      image: '../../../assets/chrome.png',
      name: {option: 'aboutMe'},
      options: {
        isFocussed: false, 
        isShortcut: true, 
        isMinimized: false,
        isOpen: false,
      }
    },
    {
      image: '../../../assets/explorer.png',
      name: {option: 'socials'}, 
      options: {
        isFocussed: false, 
        isShortcut: false, 
        isMinimized: false,
        isOpen: true,
      }
    },
    {
      image: '../../../assets/explorer.png',
      name: {option: 'projects'}, 
      options: {
        isFocussed: false, 
        isShortcut: false, 
        isMinimized: false,
        isOpen: false,
      }
    },
    {
      image: '../../../assets/mail.jpg',
      name: {option: 'contact'}, 
      options: {
        isFocussed: false, 
        isShortcut: false, 
        isMinimized: false,
        isOpen: false,
      }
    },
  ]
}
