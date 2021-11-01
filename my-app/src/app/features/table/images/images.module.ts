import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileModule } from '../../../widgets/file/file.module';
import { ImagesComponent } from './components/images/images.component';
import { ImagesRoutingModule } from './images-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ImagesRoutingModule,
    FileModule,
    TranslateModule,
  ],
})
export class ImagesModule {}
