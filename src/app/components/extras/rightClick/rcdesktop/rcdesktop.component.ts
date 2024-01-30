import { Component, ElementRef, ViewChild } from '@angular/core';
import { RCDesktopService } from '../../../../services/settings/rightClick/rcdesktop.service';
import { CommonModule } from '@angular/common';
import { RightBottomService } from '../../../../services/settings/right-bottom.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-rcdesktop',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './rcdesktop.component.html',
  styleUrl: './rcdesktop.component.scss'
})
export class RCDesktopComponent {
  @ViewChild("element", {static: true}) element: ElementRef | undefined;

  constructor(public rcdesktop: RCDesktopService, public rightBottom: RightBottomService) { }
}
