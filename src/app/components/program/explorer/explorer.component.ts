import { Component, Input, OnInit } from '@angular/core';
import { ProgramComponent } from '../program.component';
import { Program } from '../../../interfaces/program';
import { ExplorerSizeService } from '../../../services/settings/explorer/explorer-size.service';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [ProgramComponent],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent implements OnInit {
  @Input() program?: Program;
  isSmall?: boolean;

  constructor(public explorerSettings: ExplorerSizeService) {}

  ngOnInit(): void {
    if(this.program?.name == 'socials') {
      this.isSmall = this.explorerSettings.socialsIsSmall;
    } else if (this.program?.name == 'projects') {
      this.isSmall = this.explorerSettings.projectsIsSmall;
    }
  }

  toggleSmall(){
    this.isSmall = !this.isSmall
    if(this.program?.name === 'socials') {
      this.explorerSettings.toggleSocialsIsSmall();
    } else {
      this.explorerSettings.toggleProjectsIsSmall();
    }
  };
}
