import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TableRow } from 'src/app/common/interfaces/table.interface';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileComponent {
  @Input() file: TableRow;
  @Output() chooseItem = new EventEmitter<number>();

  public checked: boolean = false;

  constructor() {}

  public chooseItemDone(id: number): void {
    this.checked = !this.checked;
    this.chooseItem.emit(id);
  }
}
