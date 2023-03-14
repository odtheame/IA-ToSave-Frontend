import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit{

  constructor(public api:ApiService){  }

  ngOnInit(): void{
    var response = this.api.getAll("Documentos")
    console.log(response)
  }

}
