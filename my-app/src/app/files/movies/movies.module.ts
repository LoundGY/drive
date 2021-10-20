import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { FileModule } from '../../file/file.module';
@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, FormsModule, MoviesRoutingModule,FileModule],
})
export class MoviesModule {}
