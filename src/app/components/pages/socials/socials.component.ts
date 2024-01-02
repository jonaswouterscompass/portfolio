import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent{
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  pos1: number = 0; 
  pos2: number = 0; 
  pos3: number = 0; 
  pos4: number = 0;

  ngAfterViewInit() {
    this.makeDraggable(this.el.nativeElement.querySelector('.fileManager'));
  }

  private makeDraggable(element: HTMLElement): void {
    const header = this.el.nativeElement.querySelector('.fileManagerMove');

    if (header) {
      this.renderer.listen(header, 'mousedown', (e: MouseEvent) => {
        e.preventDefault();
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = this.closeDragElement.bind(this);
        document.onmousemove = this.elementDrag.bind(this);
      });
    }
  }

  private elementDrag(e: MouseEvent): void {
    e.preventDefault();
    const pos1 = this.pos3 - e.clientX;
    const pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

    const element = this.el.nativeElement.querySelector('.fileManager');
    element.style.top = (element.offsetTop - pos2) + 'px';
    element.style.left = (element.offsetLeft - pos1) + 'px';
  }

  private closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
