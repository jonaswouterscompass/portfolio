import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingSettingsService {
  settingsOpen: boolean = false;
  
  toggleSettings(): void {
    this.settingsOpen = !this.settingsOpen;
  }
}
