import { Injectable } from '@angular/core';
import { Program } from '../../interfaces/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  /* Programs */
  programs: Program[] = [
    {
      iconClass: ['fa-solid', 'fa-globe'],
      type: 'internet',
      name: 'about me',
      size: '15kb',
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: true, 
        place: 'desktop'
      }
    },
    {
      iconClass: ['fa-solid', 'fa-folder'],
      type: 'explorer',
      name: 'socials',
      size: '15kb', 
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: false, 
        place: 'desktop'
      }
    },
    {
      iconClass: ['fa-solid', 'fa-folder'],
      type: 'explorer',
      name: 'projects',
      size: '15kb', 
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: false, 
        place: 'desktop'
      }
    },
    {
      iconClass: ['fa-solid', 'fa-envelope'],
      type: 'mail',
      name: 'contact',
      size: '15kb', 
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: false, 
        place: 'desktop'
      }
    },
    {
      iconClass: ['fa-solid', 'fa-globe'],
      type: 'internet',
      name: 'linkedIn',
      size: '0',
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: true,
        link: 'https://www.linkedin.com/in/jonas1wouters/',
        place: "socials"
      }
    },
    {
      iconClass: ['fa-solid', 'fa-font'],
      type: 'text',
      name: 'My life',
      size: '55kb',
      options: {
        isFocussed: false,
        isFullscreen: false,
        isMinimized: false,
        isTop: false,
        isOpen: true,
        isShortcut: false,
        place: "about-me"
      }
    }
  ]

  /* Filtered programs */
  getAllPrograms(): Program[] {
    return this.programs;
  }

  getDesktopPrograms(): Program[] {
    const desktopPrograms = this.programs.filter(program => program.options.place === "desktop");
    return desktopPrograms;
  }

  getSocialsPrograms(): Program[] {
    const socialsPrograms = this.programs.filter(program => program.options.place === "socials");
    return socialsPrograms;
  }

  getAboutMePrograms(): Program[] {
    const aboutMePrograms = this.programs.filter(program => program.options.place === "about-me");
    return aboutMePrograms;
  }

  getOpenPrograms(): Program[] {
    const openPrograms = this.programs.filter(program => program.options.isOpen === true);
    return openPrograms;
  }

  getProgramsByType(): { type: string; programs: Program[] }[] {
    const programsByTypeArray: { type: string; programs: Program[] }[] = [];

    this.programs.forEach((program) => {
      const { type } = program;
      const existingTypeObject = programsByTypeArray.find((obj) => obj.type === type);

      if (existingTypeObject) {
        existingTypeObject.programs.push(program);
      } else {
        programsByTypeArray.push({ type, programs: [program] });
      }
    });

    return programsByTypeArray;
  }
  

  open(program: Program): void {
    if(!program.options.isOpen) program.options.isOpen = true;
  }

  /* Show program on top */
  public zIndex: number = 10000000;
}
