import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableItem } from 'src/app/Components/clientes/clientes-datasource';
import { ClientesDataSource } from './clientes-datasource';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit{

  constructor(public api:ApiService){ 
    this.dataSource = new ClientesDataSource();
  }
  ngOnInit(): void {
    //llamamos el getAll
    var response = this.api.getAll("Clientes")
    console.log(response);
    
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: ClientesDataSource;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Nombre', 'Direccion', 'NIT', 'Encargado'];

  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
