import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appDnd]',
})
export class DndDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    let items = evt.dataTransfer.items;
    for (let i = 0; i < items.length; i++) {
      let item = items[i].webkitGetAsEntry();
      if (item) {
        this.scanFiles(item);
      }
    }
  }
  private async getFile(fileEntry) {
    try {
      return await new Promise((resolve, reject) =>
        fileEntry.file(resolve, reject)
      );
    } catch (err) {
      console.log(err);
    }
  }
  private async scanFiles(item) {
    const this_all = this;
    if (item.isDirectory) {
      const directoryReader = item.createReader();
      directoryReader.readEntries(function (entries) {
        entries.forEach(function (entry) {
          this_all.scanFiles(entry);
        });
      });
    }
    if (item.isFile) {
      const path = item.fullPath;
      item = await this_all.getFile(item);
      item.path = path;
      this.fileDropped.emit(item);
    }
  }
}
