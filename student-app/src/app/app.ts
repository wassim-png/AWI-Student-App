import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloStudent } from "../student/hello-student/hello-student";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloStudent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-app');
}
