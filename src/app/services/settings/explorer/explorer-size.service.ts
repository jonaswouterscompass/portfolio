import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExplorerSizeService {
  projectsIsSmall: boolean = false;
  socialsIsSmall: boolean = false;

  toggleSocialsIsSmall(): void {
    this.socialsIsSmall = !this.socialsIsSmall;
  }

  toggleProjectsIsSmall(): void {
    this.projectsIsSmall = !this.projectsIsSmall;
  }
}
