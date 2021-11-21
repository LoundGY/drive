import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FileComponent } from './components/file/file.component';
import { FileTitleModule } from 'src/app/common/pipes/fileTitle/FileTitle.module';

@NgModule({
  declarations: [FileComponent],
  imports: [CommonModule, TranslateModule, FileTitleModule],
  exports: [FileComponent],
})
export class FileModule {}
