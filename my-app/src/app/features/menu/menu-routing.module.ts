import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'all',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
      },
      {
        path: 'image',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
      },
      {
        path: 'movie',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
      },
      {
        path: 'other',
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
      {
        path: '**',
        redirectTo: 'all',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
