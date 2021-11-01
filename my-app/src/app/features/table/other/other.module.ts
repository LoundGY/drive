import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FileModule } from '../../../widgets/file/file.module';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { OtherComponent } from './components/other/other.component';
import { OtherRoutingModule } from './other-routing.module';
import { OtherFiles } from '../../../common/services/files/other-files.service';

@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule,
    FormsModule,
    OtherRoutingModule,
    FileModule,
    TranslateModule,
    TooltipModule,
  ],
  providers: [OtherFiles],
})
export class OtherModule {}
