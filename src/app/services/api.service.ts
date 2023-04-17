import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { 
  }
  
url="https://localhost:7046/api/"

  async getAll(Controller: String){
    var response:any;
    await this.http.get(this.url+Controller).toPromise().then((res=>{
      response = res
    }))
    return response
  }
  async getById(Controller: String, Id: number){
    var response:any;
    await this.http.get(this.url+Controller+"/"+Id).toPromise().then((res=>{
      response = res
    }))
    return response
  }
  async create(Controller: String, Object: any){
    var response:any;
    await this.http.post(this.url+Controller, Object).toPromise().then((res=>{
      response = res
    }))
    return response
  }
  async update(Controller: String, Id: number, Object: any){
    var response:any;
    await this.http.put(this.url+Controller+"/"+Id, Object).toPromise().then((res=>{
      response = res
    }))
    return response
  }
  async delete(Controller: String, Id:number){
    var response:any;
    await this.http.delete(this.url+Controller+"/"+Id).toPromise().then((res=>{
      response = res
    }))
    return response
  }
}
