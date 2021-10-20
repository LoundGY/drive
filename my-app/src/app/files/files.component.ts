import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
})
export class FilesComponent implements OnInit {
  @Input() files;
  constructor() {}
  allFiles: Array<any> = [];
  search: string = '';
  ngOnInit(): void {}
  ngOnChanges() {
    this.allFiles = this.files;
    this.updateSearch();
  }
  sortFiles(field: string): void {
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
  updateSearch() {
    this.files = this.allFiles.filter((el) => el.name.includes(this.search));
  }
}
