import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableRow } from '../../interfaces/table.interface';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GenerateCategory } from '../generate-category.service';

@Injectable({
  providedIn: 'root',
})
export class AllFiles {
  //private baseUrl: string = '';
  private baseUrl: string = 'http://drive';
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

  constructor(private http: HttpClient, private genCat: GenerateCategory) {}

  getData(type: string = 'all'): Observable<any> {
    this.files.length = 0;
    const files$ = this.http
      .get(`${this.baseUrl}/functions/drive/files.php?category=` + type)
      .pipe(map((data: any) => data.data));
    return files$;
  }
}
