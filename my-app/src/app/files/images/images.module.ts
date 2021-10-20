import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import { FileModule } from '../../file/file.module';

@NgModule({
  declarations: [ImagesComponent],
  imports: [CommonModule, FormsModule, ImagesRoutingModule, FileModule],
})
export class ImagesModule {}
