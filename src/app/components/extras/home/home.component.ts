import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../../../interfaces/program';
import { ProgramService } from '../../../services/data/program.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public programService: ProgramService) {}
}
