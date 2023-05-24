import { Component, OnInit } from '@angular/core';
import { UsuariosFormComponent } from 'src/app/forms/usuarios-form/usuarios-form.component';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  constructor(public api: ApiService, public tableService: TableService) { }

  async ngOnInit() {
    var own = await (this.GetUsuarios());
    this.tableService.setResponseTable(own);
    const form = new Promise<any>((resolve) => {
      resolve(UsuariosFormComponent);
    });
    this.tableService.setForm(form);
  }

  async GetUsuarios(): Promise<any>{
    var get = await this.api.getAll("Usuarios")
    return get;
  }

}