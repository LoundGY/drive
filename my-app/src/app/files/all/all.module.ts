import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { FileModule } from '../../file/file.module';
import { TooltipDirective } from '../../directives/tooltip.directive';

@NgModule({
  declarations: [AllComponent, TooltipDirective],
  imports: [CommonModule, FormsModule, AllRoutingModule, FileModule],
})
export class AllModule {}
