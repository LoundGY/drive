import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableRow } from '../../interfaces/table.interface';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AllFiles {
  private baseUrl: string = '';
  //private baseUrl: string = 'http://drive';
  public dataFiles;
  public files: TableRow[] = [];
  public file: TableRow = {
    id: 0,
    name: '',
    author: '',
    date: new Date(),
    category: '',
    size: '0',
    hash: '',
  };

  constructor(private http: HttpClient) {}

  getData(type: string = 'all', directory: string = ''): Observable<any> {
    this.files.length = 0;
    const files$ = this.http
      .get(
        `${this.baseUrl}/functions/drive/files.php?category=` +
          type +
          `&directory=` +
          directory
      );
    return files$;
  }
}
