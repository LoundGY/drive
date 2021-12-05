import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { User } from 'src/app/common/interfaces/user-table.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnChanges {
  @Input() user: User;
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
