import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipDirective } from '../../../directives/tooltip.directive';
import { FileModule } from '../../../widgets/file/file.module';
import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './components/all/all.component';

@NgModule({
  declarations: [AllComponent, TooltipDirective],
  imports: [
    CommonModule,
    FormsModule,
    AllRoutingModule,
    FileModule,
    TranslateModule,
  ],
})
export class AllModule {}
