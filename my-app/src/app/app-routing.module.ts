import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () =>
      import('./files/movies/movies.module').then((m) => m.MoviesModule),
  },

  {
    path: 'other',
    loadChildren: () =>
      import('./files/other/other.module').then((m) => m.OtherModule),
  },
  {
    path: 'images',
    loadChildren: () =>
      import('./files/images/images.module').then((m) => m.ImagesModule),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./files/maps/maps.module').then((m) => m.MapsModule),
  },
  {
    path: 'all',
    loadChildren: () =>
      import('./files/all/all.module').then((m) => m.AllModule),
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./upload/upload.module').then((m) => m.UploadModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
