import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: ApiService, public tableService: TableService) { }

  async ngOnInit() {
    //llamamos el getAll
    var own = await (this.GetClientes())
    //console.log(own)
    //quita todos las propiedades de un objeto
    this.displayedColumns = Object.keys(own[0]);
    this.dataSource = new MatTableDataSource(own);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  displayedColumns: any;
  dataSource = new MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  async GetClientes(): Promise<any>{
    var get = await this.api.getAll("Clientes")
    this.tableService = get;
    return get;
  }

}