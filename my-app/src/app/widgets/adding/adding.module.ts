import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from './components/input/input.component';
import { AddingComponent } from './components/adding/adding.component';
import { GenerateCategory } from 'src/app/common/services/generate-category.service';

@NgModule({
  declarations: [AddingComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [AddingComponent],
  providers: [GenerateCategory],
})
export class AddingModule {}
