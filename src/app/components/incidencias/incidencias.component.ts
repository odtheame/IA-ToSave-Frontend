import { Component, OnInit } from '@angular/core';
import { IncidenciasFormComponent } from 'src/app/forms/incidencias-form/incidencias-form.component';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit{


  constructor(public api: ApiService, public tableService: TableService) { }
  async ngOnInit() {
    var own = await (this.GetPersonas())
    this.tableService.setResponseTable(own);
    const form = new Promise<any>((resolve) => {
      resolve(IncidenciasFormComponent);
    });
    this.tableService.setForm(form);
  }
  async GetPersonas(): Promise<any>{
    var get = await this.api.getAll("Incidencias")
    return get;
  }

}