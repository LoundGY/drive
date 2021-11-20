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
  };

  constructor(private http: HttpClient, private genCat: GenerateCategory) {}

  getData(): TableRow[] {
    const files$ = this.http.get(`${this.baseUrl}/functions/drive/files.php`);
    files$.subscribe((el) => {
      console.log(el);
      this.dataFiles = el;
      this.dataFiles.data.forEach((element) => {
        this.file.id = element.id;
        this.file.author = element.login;
        this.file.name = element.name;
        this.file.date = element.date;
        this.file.category = this.genCat.getCategory(element.name);
        this.file.size = this.genCat.formatBytes(element.size);
        this.files.push(this.file);
      });
    });

    return this.files;
  }
}
