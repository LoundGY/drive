import { NgModule } from '@angular/core';
import { FileTitlePipe } from './fileTitle.pipe';
import { sizeFormatPipe } from './sizeFormat.pipe';

@NgModule({
  imports: [],
  declarations: [FileTitlePipe,sizeFormatPipe],
  exports: [FileTitlePipe,sizeFormatPipe],
})
export class FileTitleModule {}
