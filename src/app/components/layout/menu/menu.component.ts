import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { Icon } from '../../../interfaces/icon';
import { IconService } from '../../../services/icon.service';
import { SocialsComponent } from '../../pages/socials/socials.component';
import { VariablesService } from '../../../services/variables.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IconComponent, SocialsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  icons: Icon[] | null = null;
  socials: boolean = true;

  constructor(private iconService: IconService, private variableService: VariablesService){
    this.icons = this.iconService.icons;
  }

  ngOnInit(): void {
    this.variableService.socials.subscribe({next: (data) => {
      this.socials = data
      console.log("socials:", this.socials)
    }})
  }
  
  clickIcon(index: number) {
    if(this.icons){
      for(let i = 0; i < this.icons.length; i++){
        this.icons[i].isFocussed = false;
      }
      this.icons[index].isFocussed = true
    }
  }
}
