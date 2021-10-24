import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() file: any;
  @Output() chooseItem = new EventEmitter();

  public checked: boolean = false;

  public chooseItemDone(id: string): void {
    this.checked = !this.checked;
    this.chooseItem.emit(id);
  }
}
