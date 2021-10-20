import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  public search: string = '';
  public files: any[] = [
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
