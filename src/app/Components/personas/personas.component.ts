import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{

  constructor(public api:ApiService){ }
  ngOnInit(): void {
    //llamamos el getAll
    var response = this.api.getAll("Personas")
    console.log(response);
    
  }

  

}
