import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit{

  constructor(public api: ApiService,  public tableService: TableService) { }
  async ngOnInit() {
    //llamamos el getAll
    var own = await (this.GetPersonas())
    this.tableService.setResponseTable(own);
  }

  async GetPersonas(): Promise<any>{
    var get = await this.api.getAll("Informes")
    return get;
  }

}