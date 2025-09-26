import { Component, WritableSignal, signal, computed} from '@angular/core';
import { StudentCard } from '../student-card/student-card';
import { StudentDto } from '../types/student-dto';

@Component({
  selector: 'app-student-list',
  imports: [StudentCard],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {
/*   public students: StudentDto[] = [
    { id: 0, firstname: 'Wassim', name: 'Ben Nacef', filiere: 'DaMS', promo: 4, inscription: new Date(2022, 8, 15), prix: 40, hidden: false}, 
    { id: 1, firstname: 'Clement', name: 'Frassier', filiere: 'DaMS', promo: 5, inscription: new Date(2024, 8, 3), prix: 630, hidden: false},
    { id: 2, firstname: 'Syrine', name: 'Benali', filiere: 'DaMS', promo: 3, inscription: new Date(2025, 8, 5), prix: 420, hidden: false },
    { id: 3, firstname: 'Yanis', name: 'Niaussat ', filiere: 'DaMS', promo: 5, inscription: new Date(2021, 8, 5), prix: 370, hidden: false }
  ] */

  public students: WritableSignal<StudentDto[]> = signal<StudentDto[]>([
    { id: 0, firstname: 'Wassim', name: 'Ben Nacef', filiere: 'DaMS', promo: 4, inscription: new Date(2022, 8, 15), prix: 40, hidden: false}, 
    { id: 1, firstname: 'Clement', name: 'Frassier', filiere: 'DaMS', promo: 5, inscription: new Date(2024, 8, 3), prix: 630, hidden: false},
    { id: 2, firstname: 'Syrine', name: 'Benali', filiere: 'DaMS', promo: 3, inscription: new Date(2025, 8, 5), prix: 420, hidden: false },
    { id: 3, firstname: 'Yanis', name: 'Niaussat ', filiere: 'DaMS', promo: 5, inscription: new Date(2021, 8, 5), prix: 370, hidden: false }
  ])

  public studentsCount = computed(() => this.students.length)

  public addStudent(firstname_input: string, name_input: string, filiere_input: string, promo_input: number, prix_input: number) {
    const new_student: StudentDto = {
      id: this.students.length, firstname: firstname_input, name: name_input, filiere: filiere_input,
      promo: promo_input, inscription: new Date(), prix: prix_input, hidden: false
    } 
    this.students.update(list => [...list, new_student]);
  }

  public onDelete(id: number) {
    const student = this.students().find(f => f.id === id);
    if (student) {
      student.hidden = true;
    }
  }
}
