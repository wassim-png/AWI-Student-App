import { Injectable, signal } from '@angular/core'
import { StudentDto } from '../types/student-dto'
@Injectable({ providedIn: 'root' })
export class StudentService {
private readonly _students = signal<StudentDto[]>([
    { id: 0, firstname: 'Wassim', name: 'Ben Nacef', filiere: 'DaMS', promo: 4, inscription: new Date(2022, 8, 15), prix: 40}, 
    { id: 1, firstname: 'Clement', name: 'Frassier', filiere: 'DaMS', promo: 5, inscription: new Date(2024, 8, 3), prix: 630},
    { id: 2, firstname: 'Syrine', name: 'Benali', filiere: 'DaMS', promo: 3, inscription: new Date(2025, 8, 5), prix: 420},
    { id: 3, firstname: 'Yanis', name: 'Niaussat ', filiere: 'DaMS', promo: 5, inscription: new Date(2021, 8, 5), prix: 370}
  ])
 readonly students = this._students.asReadonly() // Contrat public : lecture seule
 add(student: StudentDto): void { this._students.update(list => [...list, student]) }
 remove(id: number): void {this._students.update(list => list.filter(s => s.id !== id)) }
 removeAll(): void { this._students.set([]) }
 update(partial: Partial<StudentDto> & { id: number }): void {
 this._students.update(list =>
 list.map(s => (s.id === partial.id ? { ...s, ...partial } : s))
 )
 }
 findById(id: number): StudentDto | undefined {return this._students().find(s => s.id===id)}
}