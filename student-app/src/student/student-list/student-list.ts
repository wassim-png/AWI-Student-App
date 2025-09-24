import { Component } from '@angular/core';
import { StudentCard } from '../student-card/student-card';
import { StudentDto } from '../types/student-dto';

@Component({
  selector: 'app-student-list',
  imports: [StudentCard],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {
  public students: StudentDto[] = [
    { id: 0, firstname: 'Wassim', name: 'Ben Nacef', filiere: 'DaMS', promo: 4, inscription: new Date(2022, 8, 15), prix: 40, hidden: false}, 
    { id: 1, firstname: 'Clement', name: 'Frassier', filiere: 'DaMS', promo: 4, inscription: new Date(2024, 8, 3), prix: 630, hidden: false},
    { id: 2, firstname: 'Syrine', name: 'Benali', filiere: 'DaMS', promo: 3, inscription: new Date(2025, 8, 5), prix: 420, hidden: false}
  ]

  public onDelete(id: number) {
    this.students[id].hidden = true;
  }
}
