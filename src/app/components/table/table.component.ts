import { ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, Host, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: TableComponent }]
})
export class TableComponent extends MatPaginatorIntl implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public tableService: TableService,
    public modalService: ModalService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
    super();
  }

  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  tableData: any;
  displayedColumns: any;
  dataSource: any;
  form: any;

  override changes: Subject<void> = new Subject<void>();
  subscription: Subscription;
  override itemsPerPageLabel = 'Elementos por página';
  override nextPageLabel = 'Siguiente página';
  override previousPageLabel = 'Página anterior';

  async ngOnInit() {
    this.tableService.responseTable.subscribe(responseTable => {
      this.tableData = responseTable;
      this.displayedColumns = Object.keys(this.tableData[0]);
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.subscription = this.changes.subscribe(() => {
      //console.log('Las etiquetas del paginator han cambiado');
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mode() {
    this.itemsPerPageLabel = '';
    this.nextPageLabel = 'Fin';
    this.changes.next();
  }

  private componentRef: ComponentRef<any>;

  editarForm(valores: any) {
    const componente = this.router.url.slice(1);
    var form = this.tableService.getForm().toPromise();

    form.then((component) => {
      this.form = component;
      this.tableService.setValues(valores);
      this.modalService.openDialog(this.form);
    });
  }

  borrar() {
  }
}