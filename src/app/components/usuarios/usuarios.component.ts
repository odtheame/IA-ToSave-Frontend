import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  constructor(public api:ApiService){  }

  ngOnInit(): void{
    var response = this.api.getAll("Usuarios")
    console.log(response)
  }

}
