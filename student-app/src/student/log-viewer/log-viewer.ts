import { Component, inject} from '@angular/core';
import { LoggingService } from '../services/logging-service';

@Component({
  selector: 'app-log-viewer',
  imports: [],
  templateUrl: './log-viewer.html',
  styleUrl: './log-viewer.css'
})
export class LogViewer {

  readonly svc = inject(LoggingService);

  reset(): void {
    this.svc.clear()
  }

}
