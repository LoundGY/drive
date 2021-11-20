import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SwitcherComponent } from './components/languageSwitcher/switcher.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, SwitcherComponent, ProfileComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [HeaderComponent, SwitcherComponent],
})
export class HeaderModule {}
