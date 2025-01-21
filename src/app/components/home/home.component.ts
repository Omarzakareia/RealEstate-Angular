import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollLeft(wrapper: any) {
    wrapper.scrollLeft -= 300; // Adjust scroll amount as needed
  }

  scrollRight(wrapper: any) {
    wrapper.scrollLeft += 300; // Adjust scroll amount as needed
  }
}
