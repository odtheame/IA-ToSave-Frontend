import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  private responseTableSubject = new Subject<any>();
  responseTable: Observable<any> = this.responseTableSubject.asObservable();

  setResponseTable(responseTable: any) {
    this.responseTableSubject.next(responseTable);
  }
}
