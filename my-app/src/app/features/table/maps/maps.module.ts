import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TranslateLoader, TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileModule } from '../../../widgets/file/file.module';
import { MapsComponent } from './components/maps/maps.component';
import { MapsRoutingModule } from './maps-routing.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MapsRoutingModule,
    FileModule,
    TranslateModule
  ],
})
export class MapsModule {}
