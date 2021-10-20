import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  public search: string = '';
  public files: any[] = [
    {
      name: '1.jpg',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Фото',
      date: new Date(),
    },
    {
      name: '2.png',
      author: 'Pushkin Alex',
      size: '5.5 MB',
      category: 'Фото',
      date: new Date(),
    },
    {
      name: '1.kml',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Карты',
      date: new Date(),
    },
    {
      name: '2.mp0',
      author: 'Pushkin Alex',
      size: '5.5 MB',
      category: 'Карты',
      date: new Date(),
    },
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
    {
      name: '1.txt',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Текст',
      date: new Date(),
    },
  ];

  private allFiles: any[] = [];

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
