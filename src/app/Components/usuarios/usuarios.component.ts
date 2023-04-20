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
    //aqui es donde llamamos la BD SQL Server a la consola F12 del navegador
    var response = this.api.getAll("Usuarios")
    console.log(response);
    
  }

}