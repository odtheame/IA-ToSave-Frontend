import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  displayedColumns: any;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const response = await this.Get();
    this.dataSource = new MatTableDataSource(response);
    this.displayedColumns = Object.keys(response[0]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public async Get(): Promise<any> {
    var get = await this.api.getAll("Clientes")
    return get;
  }

  public Post(): void {
    //var create = this.api.create("Clientes", this.objeto)
  }

  public Put(): void {
    /*console.log(this.objeto)
    this.objeto.nom = "putPrueba"
    this.objeto.idPrsn = 1
    var update = this.api.update("Clientes", this.userId, this.objeto)*/
  }

  public Delete(): void {
    //var remove = this.api.delete("Clientes", this.userId)
  }

}
