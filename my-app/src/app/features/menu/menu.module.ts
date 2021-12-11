import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { SpaceService } from 'src/app/common/services/files/space.service';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule, TranslateModule,MatIconModule],
  exports: [MenuComponent],
  providers: [SpaceService],
})
export class MenuModule {}
