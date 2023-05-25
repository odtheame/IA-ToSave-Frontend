import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  private responseTableSubject = new Subject<any>();
  private formSubject = new Subject<any>();
  responseTable: Observable<any> = this.responseTableSubject.asObservable();
  form: Observable<any> = this.formSubject.asObservable();
  values: any[];
  response: any[];
  
  setResponseTable(responseTable: any) {
    this.responseTableSubject.next(responseTable);
  }

  getResponse(): any{
    return this.response;
  }

  setResponse(response: any) {
    this.response = response;
  }

  setForm(form: any) {
    this.form = form;
  }

  getForm(): Observable<any> {
    return of(this.form);
  }

  setValues(values: any[]){
    this.values = values;
  }

  getValues(): any[]{
    return this.values;
  }

}
