import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  Nombre: string;
  id: number;
  Direccion: String;
  NIT: String;
  Encargado: String;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {id: 1, Nombre: 'EXITO', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: 'ID de Persona() o nombre' },
  {id: 2, Nombre: 'Carullo', Direccion: 'Sur', NIT: '6546-54', Encargado: '' },
  {id: 3, Nombre: 'Alkosto', Direccion: 'Norte', NIT: '6546-54', Encargado: '' },
  {id: 4, Nombre: 'Polocia Nal Nacional', Direccion: 'Calle 80', NIT: '2188-685', Encargado: '' },
  {id: 5, Nombre: 'Gobierno', Direccion: 'Autopista Norte', NIT: '23115-588', Encargado: '' },
  {id: 6, Nombre: 'Google', Direccion: 'Siberia', NIT: '11100-898', Encargado: '' },
  {id: 7, Nombre: 'ECCI', Direccion: 'Cali', NIT: '35489-984', Encargado: '' },
  {id: 8, Nombre: 'ETITC', Direccion: 'Valle del Cauca', NIT: '96588-54', Encargado: '' },
  {id: 9, Nombre: 'Sede Carvajal', Direccion: 'Valle del Cauca', NIT: '96588-54', Encargado: '' },
  {id: 10, Nombre: 'SISTEMAS UNAL', Direccion: 'Guajira', NIT: '8888-54', Encargado: '' },
  {id: 11, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 12, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 13, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 14, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 15, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 16, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 17, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 18, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 19, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' },
  {id: 20, Nombre: 'Johan', Direccion: 'Calle Terreros', NIT: '6546-54', Encargado: '' }
  
];
/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClientesDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
        const isAsc = this.sort?.direction === 'asc';
        switch (this.sort?.active) {
          case 'Nombre': return compare(a.Nombre, b.Nombre, isAsc);
          case 'id': return compare(+a.id, +b.id, isAsc);
          default: return 0;
        }
      });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
