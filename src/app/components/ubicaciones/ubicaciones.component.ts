import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit{

  constructor(public api: ApiService, public tableService: TableService) { }

  async ngOnInit() {
    var own = await (this.GetUbicaciones())
    this.tableService.setResponseTable(own);
  }

  async GetUbicaciones(): Promise<any>{
    var get = await this.api.getAll("Ubicaciones")
    return get;
  }

}