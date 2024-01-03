import { Component } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { IconService } from '../../../services/icon.service';
import { SocialsComponent } from '../../pages/socials/socials.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { ContactComponent } from '../../contact/contact.component';
import { AboutMeComponent } from '../../pages/about-me/about-me.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IconComponent, SocialsComponent, ProjectsComponent, ContactComponent, AboutMeComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  iconService: IconService;

  constructor(private iService: IconService){
    this.iconService = this.iService;
  }

  clickIcon(index: number) {
    for(let i = 0; i < this.iconService.icons.length; i++){
      this.iconService.icons[i].options.isFocussed = false;
    }
    this.iconService.icons[index].options.isFocussed = true
  }
}
