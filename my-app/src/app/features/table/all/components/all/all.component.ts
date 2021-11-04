import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableRow } from 'src/app/common/interfaces/table.interface';
import { AllFiles } from 'src/app/common/services/files/all-files.service';
import { AddingComponent } from 'src/app/widgets/adding/components/adding/adding.component';

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

  constructor(private myFiles: AllFiles, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.files = this.myFiles.getData();
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
  }

  public deleteItems(): void {
    this.selectedFiles.forEach((element) => {
      this.files.splice(
        this.files.findIndex((el) => el.id === element),
        1
      );
    });
  }
  animal: string;
  name: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(AddingComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
