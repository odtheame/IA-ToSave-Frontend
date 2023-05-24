import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentosFormComponent } from 'src/app/forms/documentos-form/documentos-form.component';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  constructor(public api: ApiService, public tableService: TableService) { }

  async ngOnInit() {
    var own = await (this.GetClientes())
    this.tableService.setResponseTable(own);
    const form = new Promise<any>((resolve) => {
      resolve(DocumentosFormComponent);
    });
    this.tableService.setForm(form);
  }

  async GetClientes(): Promise<any> {
    var get = await this.api.getAll("Documentos")
    return get;
  }

}