import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  Bucket: string;
  id: number;
  IDBucket: String;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {id: 1, Bucket: 'EXITO', IDBucket: '2b2i77' },
  {id: 2, Bucket: 'AV Villas', IDBucket: '98b987' },
  {id: 3, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 4, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 5, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 6, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 7, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 8, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 9, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 10, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 11, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 12, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 13, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 14, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 15, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 16, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 17, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 18, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 19, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 20, Bucket: 'Alkosto', IDBucket: '98b987' },
  {id: 21, Bucket: 'Alkosto', IDBucket: '98b987' }
];
/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DocumentosDataSource extends DataSource<TableItem> {
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
          case 'Bucket': return compare(a.Bucket, b.Bucket, isAsc);
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
