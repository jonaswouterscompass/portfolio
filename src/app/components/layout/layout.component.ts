import { Component, HostListener, OnInit } from '@angular/core';
import { DesktopComponent } from './desktop/desktop.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DesktopComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  @HostListener("window:resize", ['$event'])
  onResize(event: Event): void {
    this.getWindowSize();
  }

  ngOnInit(): void {
    this.getWindowSize();
  }

  // Function to update height and width
  private getWindowSize(): void {
    const layoutElement = document.getElementById('layout')
    if(layoutElement) this.resizeWindow(layoutElement)
  }
    
  private resizeWindow(element: HTMLElement): void{
    element.style.width = window.innerWidth + "px";
    element.style.height = window.innerHeight + "px";
  }
}
