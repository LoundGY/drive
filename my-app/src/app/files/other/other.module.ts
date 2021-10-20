import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';
import { FileModule } from '../../file/file.module';

@NgModule({
  declarations: [OtherComponent],
  imports: [CommonModule, FormsModule, OtherRoutingModule,FileModule],
})
export class OtherModule {}
