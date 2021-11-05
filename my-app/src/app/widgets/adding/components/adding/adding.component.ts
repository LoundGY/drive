import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenerateCategory } from 'src/app/common/services/generate-category.service';
import { TableRow } from 'src/app/common/interfaces/table.interface';

@Component({
  selector: 'adding-dialog',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss'],
})
export class AddingComponent implements OnInit {
  public file: TableRow = {
    id: 0,
    name: '',
    author: '',
    size: '',
    category: '',
    date: new Date(),
  };
  public formisvalid: boolean = false;
  public nameisvalid: boolean;
  public authorisvalid: boolean;
  public sizeisvalid: boolean;
  constructor(
    public dialogRef: MatDialogRef<AddingComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private category: GenerateCategory
  ) {}
  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  public isValid(...args): void {
    switch (args[1]) {
      case 'name':
        {
          this.file.name = args[0][1];
          this.file.category = this.category.getCategory(args[0][1]);
          this.nameisvalid = args[0][0];
        }
        break;
      case 'author':
        {
          this.file.author = args[0][1];
          this.authorisvalid = args[0][0];
        }
        break;
      case 'size':
        {
          this.file.size = args[0][1];
          this.sizeisvalid = args[0][0];
        }
        break;
    }
    if (this.nameisvalid && this.authorisvalid && this.sizeisvalid) {
      this.formisvalid = true;
    } else {
      this.formisvalid = false;
    }
    console.log(this.file);
  }
}
