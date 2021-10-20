import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public search: string = '';
  public files: Array<any> = [
    {
      name: '1.mp3',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Видео',
      date: new Date(),
    },
    {
      name: '2.mp3',
      author: 'Pushkin Alex',
      size: '5.5 MB',
      category: 'Видео',
      date: new Date(),
    },
  ];

  private allFiles: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.allFiles = this.files;
  }
  ngOnChanges(): void {
    this.allFiles = this.files;
    this.updateSearch();
  }
  
  public sortFiles(field: string): void {
    this.files.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
  }
  public updateSearch(): void {
    this.files = this.allFiles.filter((el) => el.name.includes(this.search));
  }
}
