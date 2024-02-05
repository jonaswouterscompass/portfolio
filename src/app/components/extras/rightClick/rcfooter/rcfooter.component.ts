import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RcIsOpenService } from '../../../../services/settings/rightClick/rc-is-open.service';

@Component({
  selector: 'app-rcfooter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rcfooter.component.html',
  styleUrl: './rcfooter.component.scss'
})
export class RCFooterComponent {
  @ViewChild("element", {static: true}) element: ElementRef | undefined;

  constructor(public rcIsOpen: RcIsOpenService) {
  }
}
