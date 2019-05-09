import { Observable, BehaviorSubject } from 'rxjs';

export class DataService {

  private message = 'Default message from service';
  private messageSubject = new BehaviorSubject<string>('Default Subject Value...');
  getMessage() {
    return this.message;
  }



  setMessage(newValue: string) {
    this.message = newValue;
    this.messageSubject.next(newValue);
  }

  getObservable(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}
