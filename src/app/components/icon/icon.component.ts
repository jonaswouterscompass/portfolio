import { Component, Input } from '@angular/core';
import { VariablesService } from '../../services/variables.service';
import { Variables } from '../../interfaces/variables';
import { Icon } from '../../interfaces/icon';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() icon: Icon | null = null;
  
  constructor(private variableService: VariablesService){}

  changeVariable(variable: Variables){
    this.variableService[variable.option] = new BehaviorSubject(!this.variableService[variable.option])
    console.log(variable.option + ":", this.variableService[variable.option])
  }
}
