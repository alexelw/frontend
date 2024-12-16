import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Mark this as a standalone component
  imports: [RouterOutlet], // Import necessary Angular features
  templateUrl: './app.component.html', // Template reference
})
export class AppComponent {}
