import { Injectable } from '@angular/core';
import { Program } from '../interfaces/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  /* Programs */
  programs: Program[] = [
    {
      image: '../../../assets/chrome.png',
      name: 'about me',
      size: '15kb',
      options: {
        isFocussed: false, 
        isFullscreen: false,
        isMinimized: true,
        isTop: false,
        isOpen: true,
        isShortcut: true, 
        type: 'desktop'
      }
    },
    {
      image: '../../../assets/explorer.png',
      name: 'socials',
      size: '15kb', 
      options: {
        isFocussed: false, 
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: false, 
        type: 'desktop'
      }
    },
    {
      image: '../../../assets/explorer.png',
      name: 'projects',
      size: '15kb', 
      options: {
        isFocussed: false, 
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: false, 
        type: 'desktop'
      }
    },
    {
      image: '../../../assets/mail.jpg',
      name: 'contact',
      size: '15kb', 
      options: {
        isFocussed: false, 
        isFullscreen: false,
        isMinimized: true,
        isTop: false,
        isOpen: true,
        isShortcut: false, 
        type: 'desktop'
      }
    },
    {
      image: '../../../assets/chrome.png',
      name: 'linkedIn',
      size: '0',
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: true,
        isTop: false,
        isOpen: true,
        isShortcut: true,
        link: 'https://www.linkedin.com/in/jonas1wouters/',
        type: "socials"
      }
    },
    {
      image: '../../../assets/text.png',
      name: 'My life',
      size: '55kb',
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: false,
        isShortcut: false,
        type: "about-me"
      }
    }
  ]

  /* Filtered programs */
  getAllPrograms(): Program[] {
    return this.programs;
  }

  getDesktopPrograms(): Program[] {
    const desktopPrograms = this.programs.filter(program => program.options.type === "desktop");
    return desktopPrograms;
  }

  getSocialsPrograms(): Program[] {
    const socialsPrograms = this.programs.filter(program => program.options.type === "socials");
    return socialsPrograms;
  }

  getAboutMePrograms(): Program[] {
    const aboutMePrograms = this.programs.filter(program => program.options.type === "about-me");
    return aboutMePrograms;
  }

  getOpenPrograms(): Program[] {
    const openPrograms = this.programs.filter(program => program.options.isOpen === true);
    return openPrograms;
  }

  /* Show program on top */
  public zIndex: number = 10000000;
}
