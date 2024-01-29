import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackgroundService } from '../../../../services/settings/background.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-background-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './background-settings.component.html',
  styleUrl: './background-settings.component.scss'
})
export class BackgroundSettingsComponent {
  type: 'url' | 'file' | 'default' = 'url';
  imageUrl: string | undefined;
  selectedFile: File | undefined;
  isImageSelected: boolean = false;
  backgroundService: BackgroundService;

  constructor(backgroundService: BackgroundService) {
    this.backgroundService = backgroundService;
    if(backgroundService.background === 'assets/background.png') this.type = 'default';
  }

  changeType(type: 'url' | 'file' | 'default'): void {
    this.type = type;
    this.imageUrl = undefined;
    this.selectedFile = undefined;
  }

  canSubmit(): boolean {
    if(this.imageUrl && this.imageUrl.length > 0 && this.type === 'url') return true;
    if(this.isImageSelected && this.type === 'file') return true
    return false;
  }

  submitForm(): void {
    if (this.type === 'url' && this.imageUrl) {
      this.backgroundService.setBackground(this.imageUrl);
    } else if (this.type === 'file' && this.selectedFile && this.isImageSelected) {
      this.getBase64(this.selectedFile)
        .then((base64String) => {
          if (base64String.length > 5) {
            this.backgroundService.setBackground(base64String);
          }
        })
        .catch((error) => {
          console.error('Error converting file to base64:', error);
        });
    }
  }

  onFileSelected(event: any): void {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      const allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

      if (allowedImageTypes.includes(selectedFile.type)) {
        this.selectedFile = selectedFile;
        this.isImageSelected = true;
      } else {
        this.selectedFile = undefined;
        this.isImageSelected = false;
      }
    }
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Unable to convert file to base64.'));
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  getBase64(file: File): Promise<string> {
    return this.convertFileToBase64(file);
  }
}
