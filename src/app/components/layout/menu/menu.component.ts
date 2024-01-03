import { Component } from '@angular/core';
import { ProgrammaComponent } from '../../programma/programma.component';
import { ProgrammaService } from '../../../services/programma.service';
import { SocialsComponent } from '../../pages/socials/socials.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { ContactComponent } from '../../contact/contact.component';
import { AboutMeComponent } from '../../pages/about-me/about-me.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProgrammaComponent, SocialsComponent, ProjectsComponent, ContactComponent, AboutMeComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  programmaService: ProgrammaService;

  constructor(private programService: ProgrammaService){
    this.programmaService = this.programService;
  }

  clickProgram(index: number) {
    for(let i = 0; i < this.programmaService.programs.length; i++){
      this.programmaService.programs[i].options.isFocussed = false;
    }
    this.programmaService.programs[index].options.isFocussed = true
  }
}
