import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'movies',
        loadChildren: () =>
          import('../table/movies/movies.module').then((m) => m.MoviesModule),
      },

      {
        path: 'other',
        loadChildren: () =>
          import('../table/other/other.module').then((m) => m.OtherModule),
      },
      {
        path: 'images',
        loadChildren: () =>
          import('../table/images/images.module').then((m) => m.ImagesModule),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('../table/maps/maps.module').then((m) => m.MapsModule),
      },
      {
        path: 'all',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
      },
      {
        path: 'upload',
        loadChildren: () =>
          import('src/app/widgets/upload/upload.module').then(
            (m) => m.UploadModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
