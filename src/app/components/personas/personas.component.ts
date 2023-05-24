import { Component, OnInit } from '@angular/core';
import { PersonasFormComponent } from 'src/app/forms/personas-form/personas-form.component';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']

})
export class PersonasComponent implements OnInit {

  constructor(public api: ApiService, public tableService: TableService) { }
  
  async ngOnInit() {
    const own = await this.GetPersonas()
    this.tableService.setResponseTable(own);
    const form = new Promise<any>((resolve) => {
      resolve(PersonasFormComponent);
    });
    this.tableService.setForm(form);
  }

  async GetPersonas(): Promise<any>{
    var get = await this.api.getAll("Personas")
    return get;
  }
}
