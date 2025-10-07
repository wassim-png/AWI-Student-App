import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { map, filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-student-detail',
  imports: [],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetail {
  route = inject(ActivatedRoute)
private id$ = this.route.paramMap.pipe(
  map(params => params.get('id')),
  filter((id): id is string => id !== null),
  map(id => Number(id))
)
public routeId = toSignal(this.id$, { initialValue: null }) 
}
