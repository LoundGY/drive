import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { TableRow } from 'src/app/common/interfaces/table.interface';
import { User } from 'src/app/common/interfaces/user.interface';
import { AllFiles } from 'src/app/common/services/files/all-files.service';
import { DeleteService } from 'src/app/common/services/files/delete.service';
import { DownloaddService } from 'src/app/common/services/files/download.service';
import { GenerateCategory } from 'src/app/common/services/generate-category.service';
import { LoginService } from 'src/app/common/services/login/login.service';

@Component({
  selector: 'app-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  public currentUser: User;
  public search: string = '';
  public path: string = '';
  public selectedFiles: any[] = [];
  public files: TableRow[];
  private allFiles: TableRow[] = [];

  constructor(
    private myFiles: AllFiles,
    private downloads: DownloaddService,
    private router: Router,
    private deleteSer: DeleteService,
    private cdr: ChangeDetectorRef,
    private genCat: GenerateCategory,
    private authenticationService: LoginService,
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngOnInit(): void {
    const typeuRL = this.router.url.split('/');
    this.path = typeuRL[typeuRL.length - 1];
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
    this.files = this.allFiles.filter((el) =>
      el.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  public chooseItem(index: number): void {
    const indexOfItem = this.selectedFiles.indexOf(index);
    if (indexOfItem > -1) {
      this.selectedFiles.splice(indexOfItem, 1);
    } else {
      this.selectedFiles.push(index);
    }
  }

  public deleteItems(): void {
    this.selectedFiles.forEach((element) => {
      const file = this.files.find((el) => el.id === element);
      this.deleteSer.delete(file.id).subscribe((data) => {
        const indexOfItem = this.selectedFiles.indexOf(element);
        if (indexOfItem > -1) {
          this.selectedFiles.splice(indexOfItem, 1);
        }
        this.getFiles();
      });
    });
  }

  public download(): void {
    this.downloads.download(this.selectedFiles).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'SEADRIVE_' + Number(new Date()) + '.zip';
      a.click();
      URL.revokeObjectURL(objectUrl);
      this.selectedFiles.length = 0;
      this.getFiles();
    });
  }
  public selectAll(): void {
    if (this.selectedFiles.length < 1) {
      this.files.forEach((file) => {
        this.selectedFiles.push(file.id.toString());
      });
    } else {
      this.selectedFiles.length = 0;
    }
  }
}
