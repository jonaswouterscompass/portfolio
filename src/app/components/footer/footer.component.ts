import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  date: string | null = this.formatDate(new Date);
  
  ngOnInit() {
    // Set up a function to be executed every second
    setInterval(() => {
      // Get the current date and format it manually
      const currentDate = new Date();
      this.date = this.formatDate(currentDate);
    }, 1000); // 1000 milliseconds = 1 second
  }


  private formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    return date.toLocaleDateString('nl-be', options);
  }

}
