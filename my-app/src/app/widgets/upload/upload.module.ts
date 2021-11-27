import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { DndDirective } from '../../directives/upload/dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { FileTitleModule } from '../../common/pipes/fileTitle/FileTitle.module';

@NgModule({
  declarations: [UploadComponent, ProgressComponent, DndDirective],
  imports: [
    CommonModule,
    UploadRoutingModule,
    TranslateModule,
    FileTitleModule,
  ],
  exports: [UploadComponent, ProgressComponent, DndDirective],
})
export class UploadModule {}
