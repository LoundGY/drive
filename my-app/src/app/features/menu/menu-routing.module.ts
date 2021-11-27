import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'my',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
      },
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
        path: '**',
        redirectTo: 'my',
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
