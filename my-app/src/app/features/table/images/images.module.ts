import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FileModule } from '../../../widgets/file/file.module';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { ImagesComponent } from './components/images/images.component';
import { ImagesRoutingModule } from './images-routing.module';
import { ImagesFiles } from '../../../common/services/files/images-files.service';

@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ImagesRoutingModule,
    FileModule,
    TooltipModule,
  ],
  providers: [ImagesFiles],
})
export class ImagesModule {}
