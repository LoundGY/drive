import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderComponent implements OnChanges {
  @Input() folder: any;
  @Input() choose: boolean;
  @Output() chooseFolder = new EventEmitter<any>();

  public checked: boolean;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  ngOnChanges() {
    if (this.folder.name === '...') {
      this.checked = false;
    } else {
      this.checked = this.choose;
    }
  }

  public openFolder(folder) {
    const current = this.router.url.split('/');
    console.log('../' + current[current.length - 1]);
    this.router.navigate([], {
      relativeTo: this.activeRoute,
      queryParams: { directory: folder.path },
    });
  }
  public chooseItemDone(folder: any): void {
    if (this.folder.name !== '...') {
      this.checked = !this.checked;
      this.chooseFolder.emit(folder);
    }
  }
}
