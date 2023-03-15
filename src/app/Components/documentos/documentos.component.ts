import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableItem } from 'src/app/Components/documentos/documentos-datasource';
import { DocumentosDataSource } from './documentos-datasource';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit, AfterViewInit{
 
  constructor(public api:ApiService){
    this.dataSource = new DocumentosDataSource();
   }
  ngOnInit(): void {
    //llamamos el getAll
    var response = this.api.getAll("Documentoes")
    console.log(response);
    
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: DocumentosDataSource;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Bucket', 'IDBucket'];

  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}