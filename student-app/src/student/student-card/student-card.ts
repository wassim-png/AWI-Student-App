import { Component, input, output, Type} from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-student-card',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {
  public firstname = input<string>();
  public name = input<string>();
  public filiere = input<string>();
  public promo = input<number>();
  public inscription = input<Date>();
  public prix = input<number>();

  public remove = output<void>();

  public getType(): string {
    const inscription = this.inscription();
    if(!inscription) { return "" }
    const annee = inscription.getFullYear();

    if (annee < 2023) {
      return "alumni";
    }
    else if (annee <= 2024) {
      return "étudiant"
    }
    else {
      return "nouvel inscrit"
    }
  }
  
}
