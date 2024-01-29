import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RCDesktopService } from '../../../../services/settings/rightClick/rcdesktop.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../services/settings/language.service';
import { RightBottomService } from '../../../../services/settings/right-bottom.service';

@Component({
  selector: 'app-rcdesktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rcdesktop.component.html',
  styleUrl: './rcdesktop.component.scss'
})
export class RCDesktopComponent {
  @ViewChild("element", {static: true}) element: ElementRef | undefined;

  constructor(public rcdesktop: RCDesktopService, public rightBottom: RightBottomService) { }
}
