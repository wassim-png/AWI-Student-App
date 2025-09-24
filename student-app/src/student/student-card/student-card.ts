import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-student-card',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {
  public firstname: string = 'Alice';
  public name: string = 'Demers';
  public filiere: string = 'DaMS';
  public promo: number = 3;
  public inscription: Date = new Date(2025, 8, 3);
  public prix: number = 628;
}
