import { Component, Input } from '@angular/core';
import { Icon } from '../../interfaces/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() icon: Icon | null = null;

  changeState(icon:Icon){
    if(icon.options.isOpen === true) {
      icon.options.isMinimized = false;
    }
    else {
      icon.options.isOpen = true;
    }
    
  }
}
