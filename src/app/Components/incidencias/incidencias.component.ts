import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit{

  constructor(public api:ApiService){ }
  ngOnInit(): void {
    //llamamos el getAll
    var response = this.api.getAll("Incidencias")
    console.log(response);
    
  }

}