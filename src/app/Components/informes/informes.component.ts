import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit{

  constructor(public api:ApiService){ }
  ngOnInit(): void {
    //llamamos el getAll
    var response = this.api.getAll("Informes")
    console.log(response);
    
  }

}