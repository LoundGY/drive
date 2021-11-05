import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FileComponent } from './components/file/file.component';

@NgModule({
  declarations: [FileComponent],
  imports: [CommonModule, TranslateModule],
  exports: [FileComponent],
})
export class FileModule {}
