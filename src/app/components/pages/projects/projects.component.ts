import { Component } from '@angular/core';
import { FileManagerComponent } from '../file-manager/file-manager.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FileManagerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
