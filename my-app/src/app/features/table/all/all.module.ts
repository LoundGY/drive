import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { FileModule } from '../../../widgets/file/file.module';
import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './components/all/all.component';
import { AllFiles } from '../../../common/services/files/all-files.service';

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
  ],
  providers: [AllFiles],
})
export class AllModule {}
