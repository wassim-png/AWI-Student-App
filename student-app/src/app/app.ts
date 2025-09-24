import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloStudent } from "../student/hello-student/hello-student";
import { StudentCard } from "../student/student-card/student-card";
import { StudentList } from "../student/student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloStudent, StudentCard, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-app');
}
