import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  public search: string = '';
  public selectedFiles: string[] = [];
  public files: any[] = [
    {
      id: 1,
      name: '1.jpg',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Фото',
      date: new Date(),
    },
    {
      id: 2,
      name: '2.png',
      author: 'Pushkin Alex',
      size: '5.5 MB',
      category: 'Фото',
      date: new Date(),
    },
  ];

  private allFiles: any[] = [];

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

  public chooseItem(index: string): void {
    const indexOfItem = this.selectedFiles.indexOf(index);
    if (indexOfItem > -1) {
      this.selectedFiles.splice(indexOfItem, 1);
    } else {
      this.selectedFiles.push(index);
    }
  }

  public deleteItems(): void {
    this.selectedFiles.forEach((element) => {
      this.files.splice(
        this.files.findIndex((el) => el.id === element),
        1
      );
    });
  }
}
