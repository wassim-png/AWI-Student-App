import { Component, input, output, Type} from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe} from '@angular/common';
import { StudentDto } from '../types/student-dto';

@Component({
  selector: 'app-student-card',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {
  public student = input<StudentDto>();
  public remove = output<number>();
  
  public getTypeEleve(): string {
    var typeEleve = "";
    if (this.student()) {
      let st = this.student()!;
      if (st.inscription.getFullYear() < 2023) { typeEleve = "alumni" }
      else if (st.inscription.getFullYear() <= 2024) { typeEleve = "étudiant" }
      else { typeEleve = "nouvel inscrit" }
    }
    return typeEleve
  }
}
  
