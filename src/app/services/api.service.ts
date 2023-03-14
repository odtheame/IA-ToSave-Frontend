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
    var response:any
    await this.http.get(this.url+Controller).toPromise().then((res=>{
      response = res
    }))
    return response
  }
}
