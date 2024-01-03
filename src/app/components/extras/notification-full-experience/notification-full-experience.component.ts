import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-full-experience',
  standalone: true,
  imports: [],
  templateUrl: './notification-full-experience.component.html',
  styleUrl: './notification-full-experience.component.scss'
})
export class NotificationFullExperienceComponent implements OnInit{
  isOpen: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {this.isOpen = true}, 1000)
  }

  closePopup(){
    this.isOpen = false;
  }


}
