import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { FileModule } from '../../file/file.module';

@NgModule({
  declarations: [AllComponent],
  imports: [CommonModule, FormsModule, AllRoutingModule, FileModule],
})
export class AllModule {}
