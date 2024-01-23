import { Component, Input, OnInit } from '@angular/core';
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

  onMouseMove(event: MouseEvent) {
    if(this.isDragging && this.program?.position && this.startPlace) {
      this.program.position.place.left = this.startPlace.left + (-this.startMouse.left + event.clientX)
      this.program.position.place.top = this.startPlace.top + (-this.startMouse.top + event.clientY)
    }
  }

  onMouseUp() {
    /* No implementation */
  }

  onMouseDown(event: MouseEvent) {
    if(this.program) this.program.options.zIndex = ++this.programService.zIndex
    this.startMouse = {left: event.clientX, top: event.clientY}
    if(this.program?.position){
      this.startPlace = {left: this.program.position.place.left, top: this.program.position.place.top};
    }
    this.isDragging = !this.isDragging;
  }

  toggleFullscreen(): void{
    if(this.program) this.program.options.isFullscreen = !this.program.options.isFullscreen
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
