import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Place, Position, Size } from '../../interfaces/position';
import { CommonModule } from '@angular/common';
import { ProgramService } from '../../services/data/program.service';
import { Program } from '../../interfaces/program';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent implements OnInit {
  @Input() program: Program | undefined;
  startMouse: Place = {left: 0, top: 0};
  startPlace: Place | undefined;
  windowSize: Size | undefined;

  initialPosition: Position = { 
    place: { top: 50, left: 50 }, 
    size: { width: 300, height: 300 }
  }

  isDragging: boolean = false;

  constructor(private programService: ProgramService){ }

  ngOnInit(): void {
    if(this.program && !this.program.position) this.program.position = this.initialPosition;

    this.windowSize = { width: window.innerWidth, height: window.innerHeight}
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onMouseMove(event: MouseEvent | TouchEvent) {
    if(!this.isDragging || !this.program?.position || !this.startPlace) return;
    if (!(event instanceof MouseEvent) && !(event instanceof TouchEvent)) return;
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    const tempNewPlace: Place = {
      left: this.startPlace.left + (-this.startMouse.left + clientX),
      top: this.startPlace.top + (-this.startMouse.top + clientY)
    }

    const newPlace: Place = {
      left: Math.min(window.innerWidth - 200, Math.max(0, tempNewPlace.left)),
      top: Math.min(window.innerHeight - 200, Math.max(0, tempNewPlace.top))
    }
    
    if(newPlace.left < 1) newPlace.left = 1;
    if(newPlace.top < 1) newPlace.top = 1;

    this.program.position.place = newPlace;
  }

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:touchend', ['$event'])
  onMouseUp() {
    if(!this.isDragging) return;
    this.isDragging = false;
  }

  onMouseDown(event: MouseEvent | TouchEvent) {
    if(!this.program?.position || this.program.options.isFullscreen) return

    this.program.options.zIndex = ++this.programService.zIndex
    if (event instanceof MouseEvent) this.startMouse = {left: event.clientX, top: event.clientY}
    if (event instanceof TouchEvent) this.startMouse = {left: event.touches[0].clientX, top: event.touches[0].clientY}
    
    this.startPlace = {left: this.program.position.place?.left, top: this.program.position.place?.top};
    this.isDragging = true;
  }

  toggleFullscreen(): void{
    if(!this.program?.position) return
    this.program.options.isFullscreen = !this.program.options.isFullscreen
    if(this.program.options.isFullscreen){
      this.program.position = {place: {left:1, top:1}, size: {width: window.innerWidth - 1, height: window.innerHeight - 1}}
    } else {
      this.program.position = this.initialPosition;
    }
  }

  showOnTop(): void {
    if(this.program) this.program.options.zIndex = ++this.programService.zIndex
  }

  close(): void{
    if(this.program) this.program.options.isOpen = false;
  }

  minimize(): void{
    if(this.program) this.program.options.isMinimized = true;
  }
}
