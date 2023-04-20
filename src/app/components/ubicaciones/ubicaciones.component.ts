import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: ApiService) { }

  async ngOnInit() {
    //llamamos el getAll
    var own = await (this.GetUbicaciones())
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
  async GetUbicaciones(): Promise<any>{
    var get = await this.api.getAll("Ubicaciones")
    return get;
  }

}