import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private localStorageKey = "customBackground";

  getBackground(): string{
    const storedBackground = localStorage.getItem(this.localStorageKey);
    return storedBackground || 'assets/background.png'; 
  }

  setBackground(imagePath: string): void {
    localStorage.setItem(this.localStorageKey, imagePath);
  }
  
  hasBackground(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }
}
