import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  url= "https://localhost:7046/api/"
  async getAll(Controller:string){
    var response:any;
    await this.http.get(this.url+Controller).toPromise().then((res=>{
      response=res
    }))
    return response;
  }
/*
  async postAll(Controller:string){
    var response1:any
    await this.http.post(this.url+Controller).toPromise().then((res=>{
      response1=res
    }))
    return response1
  }
  */
}
