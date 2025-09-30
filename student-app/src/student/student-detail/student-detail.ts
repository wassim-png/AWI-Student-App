import { Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-student-detail',
  imports: [],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css', 
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentDetail {

}
