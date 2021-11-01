import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () =>
      import('./features/table/movies/movies.module').then(
        (m) => m.MoviesModule
      ),
  },

  {
    path: 'other',
    loadChildren: () =>
      import('./features/table/other/other.module').then((m) => m.OtherModule),
  },
  {
    path: 'images',
    loadChildren: () =>
      import('./features/table/images/images.module').then(
        (m) => m.ImagesModule
      ),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./features/table/maps/maps.module').then((m) => m.MapsModule),
  },
  {
    path: 'all',
    loadChildren: () =>
      import('./features/table/all/all.module').then((m) => m.AllModule),
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./widgets/upload/upload.module').then((m) => m.UploadModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
