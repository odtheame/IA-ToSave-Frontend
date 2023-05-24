import { Component, OnInit } from '@angular/core';
import { UbicacionesFormComponent } from 'src/app/forms/ubicaciones-form/ubicaciones-form.component';
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
    const form = new Promise<any>((resolve) => {
      resolve(UbicacionesFormComponent);
    });
    this.tableService.setForm(form);
  }

  async GetUbicaciones(): Promise<any>{
    var get = await this.api.getAll("Ubicaciones")
    return get;
  }

}