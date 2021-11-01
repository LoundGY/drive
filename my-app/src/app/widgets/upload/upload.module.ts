import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { DndDirective } from '../../directives/upload/dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { FileTitlePipe } from './pipes/fileTitle.pipe';

@NgModule({
  declarations: [
    UploadComponent,
    ProgressComponent,
    FileTitlePipe,
    DndDirective,
  ],
  imports: [CommonModule, UploadRoutingModule, TranslateModule],
})
export class UploadModule {}