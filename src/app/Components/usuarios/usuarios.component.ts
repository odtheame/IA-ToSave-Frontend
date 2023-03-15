import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  constructor(public api:ApiService){ }
  ngOnInit(): void {
    //llamamos el getAll
    var response = this.api.getAll("Usuarios")
    console.log(response);
    
  }

}