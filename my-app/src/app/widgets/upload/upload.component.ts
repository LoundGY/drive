import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UploadService } from 'src/app/common/services/files/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent {
  @Output() fileLoad = new EventEmitter<any>();
  public files: File[] = [];
  public filesProgress = new Map();
  public message = '';
  public fileInfos: Observable<any>;

  constructor(
    private uploadService: UploadService,
    private cdr: ChangeDetectorRef
  ) {}

  public fileBrowseHandler(files): void {
    this.prepareFilesList(files.target.files);
  }
  public prepareFilesList(files: any[]): void {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      this.filesProgress.set(item, 0);
    }
    this.upload();
  }
  public onFileDropped($event): void {
    this.prepareFilesList($event);
  }
  public deleteFile(index: number): void {
    this.filesProgress.delete(this.files[index]);
    this.files.splice(index, 1);
  }
  public upload(): void {
    for (let i = 0; i < this.files.length; i++) {
      if (!(this.filesProgress.get(this.files[i]) > 0)) {
        const upload$ = this.uploadService.upload(this.files[i]).subscribe(
          (event) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.filesProgress.set(
                this.files[i],
                Math.round((100 * event.loaded) / event.total)
              );
              if (!this.files[i]) {
                upload$.unsubscribe();
              }
              if (this.filesProgress.get(this.files[i]) === 100) {
                setTimeout(() => {
                  this.files.splice(this.files.indexOf(this.files[i]), 1);
                  this.filesProgress.delete(this.files[i]);
                  this.fileLoad.emit();
                  this.cdr.detectChanges();
                }, 1000);
              }
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
            }
            this.cdr.detectChanges();
          },
          (err) => {
            this.message = 'Could not upload the file!';
          }
        );
      }
    }
  }
  public delete(): void {}
  public formatBytes(bytes, decimals = 2): string {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
