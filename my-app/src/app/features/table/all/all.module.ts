import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { FileModule } from '../../../widgets/file/file.module';
import { AllRoutingModule } from './all-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AllComponent } from './components/all/all.component';
import { AllFiles } from '../../../common/services/files/all-files.service';
import { UploadModule } from 'src/app/widgets/upload/upload.module';

@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    FormsModule,
    AllRoutingModule,
    FileModule,
    TranslateModule,
    TooltipModule,
    MatButtonModule,
    MatIconModule,
    UploadModule,
  ],
  providers: [AllFiles],
})
export class AllModule {}
