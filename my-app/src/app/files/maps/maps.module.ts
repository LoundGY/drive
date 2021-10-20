import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { FileModule } from '../../file/file.module';

@NgModule({
  declarations: [MapsComponent],
  imports: [CommonModule, FormsModule, MapsRoutingModule, FileModule],
})
export class MapsModule {}
