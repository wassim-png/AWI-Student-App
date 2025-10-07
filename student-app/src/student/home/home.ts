import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterOutlet, StudentList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
