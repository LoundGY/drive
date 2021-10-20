import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @Input() file;

  checked: boolean = false;

  ngOnInit(): void {}
  ngOnChanges() {
    this.checked = false;
  }
}
