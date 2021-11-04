import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableRow } from 'src/app/common/interfaces/table.interface';

@Component({
  selector: 'adding-dialog',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss'],
})
export class AddingComponent implements OnInit {
  public file: TableRow;
  public formisvalid: boolean = true;
  public name: FormControl;
  public author: FormControl;
  public size: FormControl;
  constructor(
    public dialogRef: MatDialogRef<AddingComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required]);
    this.author = new FormControl('', [Validators.required]);
    this.size = new FormControl('', [Validators.required]);
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
