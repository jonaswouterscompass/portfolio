import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RCFooterService } from '../../../../services/settings/rightClick/rcfooter.service';

@Component({
  selector: 'app-rcfooter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rcfooter.component.html',
  styleUrl: './rcfooter.component.scss'
})
export class RCFooterComponent {
  @ViewChild("element", {static: true}) element: ElementRef | undefined;
  rcfooter: RCFooterService;

  constructor(rcfooter: RCFooterService) {
    this.rcfooter = rcfooter;
  }
}
