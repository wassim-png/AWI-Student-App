import { Component } from '@angular/core';
import { StudentCard } from '../student-card/student-card';

@Component({
  selector: 'app-student-list',
  imports: [StudentCard],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {
  public firstname1: string = 'Wassim';
  public name1: string = 'Ben Nacef';
  public filiere1: string = 'DaMS';
  public promo1: number = 4;
  public inscription1: Date = new Date(2025, 8, 15);
  public prix1: number = 40;

  public firstname2: string = 'Clement';
  public name2: string = 'Frassier';
  public filiere2: string = 'DaMS';
  public promo2: number = 4;
  public inscription2: Date = new Date(2025, 8, 3);
  public prix2: number = 630;
}
