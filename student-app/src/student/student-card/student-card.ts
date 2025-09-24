import { Component, input} from '@angular/core';
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
}
