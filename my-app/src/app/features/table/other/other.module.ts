import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileModule } from '../../../widgets/file/file.module';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { OtherComponent } from './components/other/other.component';
import { OtherRoutingModule } from './other-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
})
export class OtherModule {}
