import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() file: any;
  @Output() chooseItem = new EventEmitter<number>();

  public checked: boolean = false;

  public chooseItemDone(id: number): void {
    this.checked = !this.checked;
    this.chooseItem.emit(id);
  }
}
