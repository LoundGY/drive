import { HttpEventType, HttpResponse } from '@angular/common/http';
import { findLast } from '@angular/compiler/src/directive_resolver';
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
import { ActivatedRoute } from '@angular/router';
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
  @ViewChild('fileDropRef', { static: false })
  fileInput: ElementRef | undefined;
  public files: File[] = [];
  public filesProgress = new Map();
  public message = '';
  public fileInfos: Observable<any>;

  constructor(
    private uploadService: UploadService,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  public fileBrowseHandler(files): void {
    for (let i = 0; i < files.target.files.length; i++) {
      this.prepareFilesList(files.target.files[i]);
    }
  }
  public prepareFilesList(file: any): void {
    this.fileInput.nativeElement.value = '';
    file.progress = 0;
    if (!file.path) {
      file.path = '/' + file.name;
    }
    this.files.push(file);
    this.filesProgress.set(file, 0);
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
    const whereRoute = this.activeRoute.snapshot.queryParams.directory;
    for (let i = 0; i < this.files.length; i++) {
      if (!(this.filesProgress.get(this.files[i]) > 0)) {
        this.filesProgress.set(this.files[i], 0.1);
        const upload$ = this.uploadService
          .upload(this.files[i], whereRoute)
          .subscribe(
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
}
