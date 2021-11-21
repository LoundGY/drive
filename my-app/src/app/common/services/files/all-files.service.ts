import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableRow } from '../../interfaces/table.interface';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenerateCategory } from '../generate-category.service';

@Injectable({
  providedIn: 'root',
})
export class AllFiles {
  public dataFiles;
  // private baseUrl: string = 'https://seatest.h1n.ru';
  private baseUrl: string = 'http://drive';
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

  getData(type: string = 'all'): TableRow[] {
    this.files.length = 0;
    const files$ = this.http.get(`${this.baseUrl}/functions/drive/files.php`);
    files$.subscribe((el) => {
      this.dataFiles = el;
      this.dataFiles.data.forEach((element) => {
        this.file = {
          id: element.id,
          author: element.login,
          name: element.name,
          date: element.date,
          category: this.genCat.getCategory(element.name),
          size: this.genCat.formatBytes(element.size),
          hash: element.hash,
        };
        if (this.file.category === type || type === 'all') {
          this.files.push(this.file);
        }
      });
    });

    return this.files;
  }
}
