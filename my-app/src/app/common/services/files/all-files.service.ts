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
  private baseUrl = 'http://drive/functions/drive';
  public dataFiles;
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
    const files$ = this.http.get(`${this.baseUrl}/files`);
    files$.subscribe((el) => {
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
