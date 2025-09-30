import { Component, WritableSignal, signal, computed, effect, ChangeDetectionStrategy, inject} from '@angular/core';
import { StudentCard } from '../student-card/student-card';
import { StudentDto } from '../types/student-dto';
import { StudentService } from '../services/student-service';
import { LoggingService } from '../services/logging-service';

@Component({
  selector: 'app-student-list',
  imports: [StudentCard],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentList {

  readonly svc = inject(StudentService);
  readonly logging = inject(LoggingService);

  add(firstname_input: string, name_input: string, filiere_input: string, promo_input: number, prix_input: number): void {
/*     if (!firstname_input || !name_input || !filiere_input) { */
        const new_student: StudentDto = {
          id: Date.now(), firstname: firstname_input, name: name_input, filiere: filiere_input,
          promo: promo_input, inscription: new Date(), prix: prix_input
        }
        this.logging.log('Étudiant ajouté', 'StudentList')
        return this.svc.add(new_student)  
/*     } */
  }

  promote(id: number): void {
    const s = this.svc.findById(id)
    if (s) {
      this.svc.update({ id, promo: s.promo + 1 })
      this.logging.log('Étudiant promu', 'StudentList')
    }
  }
  
  remove(id: number): void {
    this.svc.remove(id)
    this.logging.log('Étudiant supprimé', 'StudentList')
  } 


/*   public students: WritableSignal<StudentDto[]> = signal<StudentDto[]>([
    { id: 0, firstname: 'Wassim', name: 'Ben Nacef', filiere: 'DaMS', promo: 4, inscription: new Date(2022, 8, 15), prix: 40, hidden: false}, 
    { id: 1, firstname: 'Clement', name: 'Frassier', filiere: 'DaMS', promo: 5, inscription: new Date(2024, 8, 3), prix: 630, hidden: false},
    { id: 2, firstname: 'Syrine', name: 'Benali', filiere: 'DaMS', promo: 3, inscription: new Date(2025, 8, 5), prix: 420, hidden: false },
    { id: 3, firstname: 'Yanis', name: 'Niaussat ', filiere: 'DaMS', promo: 5, inscription: new Date(2021, 8, 5), prix: 370, hidden: false }
  ])

  private nextId = signal(4);

  private lastStudent = signal<StudentDto | null>(null);

  public studentsCount = computed(() => this.students().length) 

  constructor() {
    effect(() => {
      console.log("Nombre d'étudiants et étudiantes : ", this.studentsCount());
      console.log("Étudiant ou étudiantes supprimée : ", this.lastStudent()?.firstname)
    });
  }

  public addStudent(firstname_input: string, name_input: string, filiere_input: string, promo_input: number, prix_input: number) {
    const new_student: StudentDto = {
      id: this.nextId(), firstname: firstname_input, name: name_input, filiere: filiere_input,
      promo: promo_input, inscription: new Date(), prix: prix_input, hidden: false
    } 
    this.students.update(list => [...list, new_student]);
    this.nextId.update(id => id + 1);
  }

  public deleteStudent(id: number) {
    const student = this.students().find(f => f.id === id);
    if (student) {
      this.lastStudent.set(student);
    }
    this.students.update(list => list.filter(student => student.id !== id));
  }

/*   public onDelete(id: number) {
    const student = this.students().find(f => f.id === id);
    if (student) {
      student.hidden = true;
    }
  } */ 
}
