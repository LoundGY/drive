import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { TableRow } from 'src/app/common/interfaces/table.interface';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileComponent implements OnChanges {
  @Input() file: TableRow;
  @Input() choose: boolean;
  @Output() chooseItem = new EventEmitter<number>();

  public checked: boolean;

  constructor() {}
  ngOnChanges() {
    this.checked = this.choose;
  }

  public chooseItemDone(id: number): void {
    this.checked = !this.checked;
    this.chooseItem.emit(id);
  }
}
