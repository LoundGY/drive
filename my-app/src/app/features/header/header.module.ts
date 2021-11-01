import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SwitcherComponent } from './components/languageSwitcher/switcher.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SwitcherComponent,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [
    HeaderComponent,
    SwitcherComponent,
  ]
})
export class HeaderModule {}
