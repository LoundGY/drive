import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FileModule } from '../../../widgets/file/file.module';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesFiles } from '../../../common/services/files/movies-files.service';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    FileModule,
    TranslateModule,
    TooltipModule,
  ],
  providers: [MoviesFiles],
})
export class MoviesModule {}
