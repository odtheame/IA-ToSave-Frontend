import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit{

  constructor(public api:ApiService){  }

  ngOnInit(): void{
    var response = this.api.getAll("Ubicaciones")
    console.log(response)
  }

}
