import { Injectable } from '@angular/core';
import { Icon } from '../interfaces/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  icons: Icon[] = [
    {image: '../../../assets/chrome.png', display: 'about me', variable: {option: 'aboutMe'}, isFocussed: false, isShortcut: true},
    {image: '../../../assets/explorer.png', display: 'socials', variable: {option: 'socials'}, isFocussed: false},
    {image: '../../../assets/explorer.png', display: 'projects', variable: {option: 'projects'}, isFocussed: false },
    {image: '../../../assets/mail.jpg', display: 'contact', variable: {option: 'contact'}, isFocussed: false },
  ]
}
