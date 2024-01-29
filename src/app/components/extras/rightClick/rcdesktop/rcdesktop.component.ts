import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RCDesktopService } from '../../../../services/settings/rightClick/rcdesktop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rcdesktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rcdesktop.component.html',
  styleUrl: './rcdesktop.component.scss'
})
export class RCDesktopComponent {
  @ViewChild("element", {static: true}) element: ElementRef | undefined;
  rcdesktop: RCDesktopService;

  constructor(rcdesktop: RCDesktopService) {
    this.rcdesktop = rcdesktop;
  }
}
