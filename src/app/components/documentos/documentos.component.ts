import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit{

 
  constructor(public api: ApiService,  public tableService: TableService) { }
   async ngOnInit() {
    var own = await (this.GetClientes())
    this.tableService.setResponseTable(own);
   }
   
  async GetClientes(): Promise<any>{
    var get = await this.api.getAll("Documentos")
    return get;
  }

}