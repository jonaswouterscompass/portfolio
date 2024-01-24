import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Place, Position, Size } from '../../interfaces/position';
import { CommonModule } from '@angular/common';
import { ProgramService } from '../../services/program.service';
import { Program } from '../../interfaces/program';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent implements OnInit {
  @Input() program: Program | undefined;
  startMouse: Place = {left: 0, top: 0};
  startPlace: Place | undefined;
  windowSize: Size | undefined;

  initialPosition: Position = { place: { top: 50, left: 50 }, size: { width: 300, height: 300 } }

  isDragging: boolean = false;
  
  programService: ProgramService;
  constructor(programService: ProgramService){
    this.programService = programService;
  }

  ngOnInit(): void {
    if(this.program && !this.program.position) this.program.position = this.initialPosition;

    this.windowSize = { width: window.innerWidth, height: window.innerHeight}
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onMouseMove(event: MouseEvent | TouchEvent) {
    if(!this.isDragging || !this.program?.position || !this.startPlace) {
      return;
    }
    
    let tempNewPlace: Place = {left: 0, top: 0};

    if (event instanceof MouseEvent){
      tempNewPlace = { 
        left: this.startPlace.left + (-this.startMouse.left + event.clientX), 
        top: this.startPlace.top + (-this.startMouse.top + event.clientY) 
      }
    } else if (event instanceof TouchEvent){
      tempNewPlace = { 
        left: this.startPlace.left + (-this.startMouse.left + event.touches[0].clientX), 
        top: this.startPlace.top + (-this.startMouse.top + event.touches[0].clientY)
      }
    }

    const newPlace: Place = {
      left: Math.min(window.innerWidth - 200, Math.max(0, tempNewPlace.left)),
      top: Math.min(window.innerHeight - 200, Math.max(0, tempNewPlace.top))
    }

    this.program.position.place = newPlace;
  }

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:touchend', ['$event'])
  onMouseUp() {
    if(!this.isDragging) return
    console.log("mouseUp")
    this.isDragging = false;
  }

  onMouseDown(event: MouseEvent | TouchEvent) {
    if(!this.program?.position) return

    this.program.options.zIndex = ++this.programService.zIndex
    if (event instanceof MouseEvent) this.startMouse = {left: event.clientX, top: event.clientY}
    if (event instanceof TouchEvent) this.startMouse = {left: event.touches[0].clientX, top: event.touches[0].clientY}
    
    this.startPlace = {left: this.program.position.place.left, top: this.program.position.place.top};
    this.isDragging = true;
  }

  toggleFullscreen(): void{
    if(!this.program?.position) return
    this.program.options.isFullscreen = !this.program.options.isFullscreen
    if(this.program.options.isFullscreen){
      this.program.position = {place: {left:0, top:0}, size: {width: window.innerWidth, height: window.innerHeight}}
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
