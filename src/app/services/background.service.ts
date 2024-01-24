import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private localStorageKey = "customBackground";
  public isValid: boolean = true;

  getBackground(): string{
    const storedBackground = localStorage.getItem(this.localStorageKey);
    if(!storedBackground) return 'assets/background.png';

    const img = new Image();
    img.src = storedBackground;
    if(!img.complete || img.width <= 0 || img.height <= 0) {
      this.isValid = false;
      return 'assets/background.png';
    }
    this.isValid = true;
    return storedBackground;
  }

  setBackground(imagePath: string): void {
    localStorage.setItem(this.localStorageKey, imagePath);
  }
  
  hasBackground(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }
}
