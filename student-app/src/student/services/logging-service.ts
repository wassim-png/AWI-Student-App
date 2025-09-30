import { Injectable, signal} from '@angular/core';
import { LogEntry } from '../types/log-entry'

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private readonly _entries = signal<LogEntry[]>([]);
  readonly entries = this._entries.asReadonly();

  log(message: string, scope?: string): void {
    const log: LogEntry = { id: crypto.randomUUID(), ts: new Date(), message: message, scope: scope }
    this._entries.update(list => [...list, log])
  }

  clear(): void {
    this._entries.set([]);
  }
  
}
