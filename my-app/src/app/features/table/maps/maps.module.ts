import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FileModule } from '../../../widgets/file/file.module';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { MapsComponent } from './components/maps/maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MapFiles } from '../../../common/services/files/map-files.service';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MapsRoutingModule,
    FileModule,
    TranslateModule,
    TooltipModule,
  ],
  providers: [MapFiles],
})
export class MapsModule {}
