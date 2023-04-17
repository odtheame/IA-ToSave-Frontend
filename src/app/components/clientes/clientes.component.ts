import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public api:ApiService){  }

  ngOnInit(): void{
    var response = this.api.getAll("Clientes")
    console.log(response)
  }

}
