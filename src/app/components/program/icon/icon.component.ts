import { Component, Input } from '@angular/core';
import { Program } from '../../../interfaces/program';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() program: Program | undefined;
  @Input() darkBackground: boolean = false;
  @Input() isExplorer: boolean = true;
  @Input() isSmall?: boolean;
}
