import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    TranslateModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
})
export class UsersModule {}
