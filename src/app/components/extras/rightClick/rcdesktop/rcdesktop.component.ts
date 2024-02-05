import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RcIsOpenService } from '../../../../services/settings/rightClick/rc-is-open.service';
import { LcIsOpenService } from '../../../../services/settings/leftClick/lc-is-open.service';

@Component({
  selector: 'app-rcdesktop',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './rcdesktop.component.html',
  styleUrl: './rcdesktop.component.scss'
})
export class RCDesktopComponent {
  @ViewChild("element", {static: true}) element: ElementRef | undefined;

  constructor(
    public rcIsOpen: RcIsOpenService,
    public lcIsOpen: LcIsOpenService) { }
}
