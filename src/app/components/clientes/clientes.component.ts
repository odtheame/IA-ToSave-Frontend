import { Component, OnInit } from '@angular/core';
import { ClientesFormComponent } from 'src/app/forms/clientes-form/clientes-form.component';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  constructor(public api: ApiService, public tableService: TableService) { }

  async ngOnInit() {
    var own = await this.GetClientes();
    this.tableService.setResponseTable(own);
    const form = new Promise<any>((resolve) => {
      resolve(ClientesFormComponent);
    });
    this.tableService.setForm(form);
  }

  async GetClientes(): Promise<any>{
    var get = await this.api.getAll("Clientes")
    return get;
  }

}
