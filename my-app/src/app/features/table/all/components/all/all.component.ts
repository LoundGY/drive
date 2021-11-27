import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { TableRow } from 'src/app/common/interfaces/table.interface';
import { AllFiles } from 'src/app/common/services/files/all-files.service';
import { DownloaddService } from 'src/app/common/services/files/download.service';
import { GenerateCategory } from 'src/app/common/services/generate-category.service';

@Component({
  selector: 'app-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    private router: Router,
    private cdr: ChangeDetectorRef,
    private genCat: GenerateCategory
  ) {}

  ngOnInit(): void {
    this.getFiles();
  }
  public getFiles(): void {
    const typeuRL = this.router.url.split('/');
    this.myFiles.getData(typeuRL[typeuRL.length - 1]).subscribe((data: any) => {
      const newFiles: TableRow[] = [];
      data.forEach((file) => {
        const newfile = {
          id: file.id,
          author: file.login,
          name: file.name,
          date: file.date,
          category: file.category ? file.category : 'other',
          size: this.genCat.formatBytes(file.size),
          hash: file.hash,
        };
        newFiles.push(newfile);
      });
      this.files = newFiles;
      this.allFiles = this.files;
      this.cdr.detectChanges();
    });
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

  public deleteItems(): void {}

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
