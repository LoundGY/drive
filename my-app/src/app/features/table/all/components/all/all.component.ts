import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TableRow } from 'src/app/common/interfaces/table.interface';
import { AllFiles } from 'src/app/common/services/files/all-files.service';
import { DownloaddService } from 'src/app/common/services/files/download.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  public search: string = '';
  public selectedFiles: number[] = [];
  public files: TableRow[];

  private allFiles: TableRow[] = [];

  constructor(
    private myFiles: AllFiles,
    private downloads: DownloaddService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const typeuRL = this.router.url.split('/');
    this.files = this.myFiles.getData(typeuRL[typeuRL.length - 1]);
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

  public chooseItem(index: number): void {
    const indexOfItem = this.selectedFiles.indexOf(index);
    if (indexOfItem > -1) {
      this.selectedFiles.splice(indexOfItem, 1);
    } else {
      this.selectedFiles.push(index);
    }
    console.log(this.selectedFiles);
  }

  public deleteItems(): void {
    this.selectedFiles.forEach((element) => {
      this.files.splice(
        this.files.findIndex((el) => el.id === element),
        1
      );
    });
  }
  public download(): void {
    this.selectedFiles.forEach((element) => {
      const file = this.files.find((el) => el.id === element);

      this.downloads.download(file.hash).subscribe((blob) => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(objectUrl);
      });
    });
  }
}
