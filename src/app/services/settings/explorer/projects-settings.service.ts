import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsSettingsService {
  isSmall: boolean = false;
  
  toggleSmall() {
    this.isSmall = !this.isSmall;
  }
}
