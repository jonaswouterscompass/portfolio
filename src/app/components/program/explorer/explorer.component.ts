import { Component, Input } from '@angular/core';
import { ExplorerSettingsService } from '../../../services/explorer-settings.service';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {
  explorerSettings: ExplorerSettingsService;
  constructor(explorerSettingsService: ExplorerSettingsService){
    this.explorerSettings = explorerSettingsService;
  }

  setSmall(){
    this.explorerSettings.size = "small";
  }

  setLarge(){
    this.explorerSettings.size = "large";
    console.log(this.explorerSettings)
  }

}
