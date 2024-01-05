import { Injectable } from '@angular/core';
import { Programma } from '../interfaces/programma';

@Injectable({
  providedIn: 'root'
})
export class ProgrammaService {
  startPrograms: Programma[] = [
    {
      image: '../../../assets/chrome.png',
      name: 'aboutMe',
      size: '15kb',
      options: {
        isFocussed: false, 
        isShortcut: true, 
        isMinimized: false,
        isOpen: false,
      }
    },
    {
      image: '../../../assets/explorer.png',
      name: 'socials',
      size: '15kb', 
      options: {
        isFocussed: false, 
        isShortcut: false, 
        isMinimized: false,
        isOpen: false,
      }
    },
    {
      image: '../../../assets/explorer.png',
      name: 'projects',
      size: '15kb', 
      options: {
        isFocussed: false, 
        isShortcut: false, 
        isMinimized: false,
        isOpen: false,
      }
    },
    {
      image: '../../../assets/mail.jpg',
      name: 'contact',
      size: '15kb', 
      options: {
        isFocussed: false, 
        isShortcut: false, 
        isMinimized: false,
        isOpen: false,
      }
    },
  ];


  socialPrograms: Programma[] = [
    {
      image: '../../../assets/chrome.png',
      name: 'linkedIn',
      size: '0',
      options: {
        isFocussed: false,
        isShortcut: true,
        shortCutLink: 'https://www.linkedin.com/in/jonas1wouters/',
        isMinimized: false,
        isOpen: false,
      }
    }
  ]
}
