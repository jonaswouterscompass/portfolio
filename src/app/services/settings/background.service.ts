import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private localStorageKey = "customBackground";
  defaultBackground: string = "assets/background.png";
  background: string = "assets/background.png";
  brightness: number = 0;
  public isValid: boolean = true;

  constructor() {
    this.getBackground();
  }

  getBackground(): void{
    const storedBackground = localStorage.getItem(this.localStorageKey);
    
    if(!storedBackground){
      this.setDefaultBackground();
    } else {
      this.loadBackground(storedBackground);
    }
  }

  setBackground(imagePath: string): void {
    localStorage.setItem(this.localStorageKey, imagePath);
    this.loadBackground(imagePath);
  }
  
  hasBackground(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }
  
  setDefaultBackground(): void {
    this.isValid = true;
    this.background = this.defaultBackground;
    localStorage.setItem(this.localStorageKey, this.background);
    this.loadBackground(this.defaultBackground);
  }
  
  loadBackground(imagePath: string): void {
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      this.isValid = true;
      this.background = imagePath;
      this.calculateImageBrightness(img);
    }

    img.onerror = () => {
      this.setDefaultBackground()
    }
  }

  private calculateImageBrightness(img: HTMLImageElement): void {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = "red"

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let colorSum = 0;

    for (let x = 0, len = data.length; x < len; x += 4) {
      const r = data[x];
      const g = data[x + 1];
      const b = data[x + 2];

      const avg = Math.floor((r + g + b) / 3);
      colorSum += avg;
    }

    this.brightness = Math.floor(colorSum / (img.width * img.height));
  }
}
