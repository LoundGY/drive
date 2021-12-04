import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/common/services/login/auth.guard';
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
        canActivate: [AuthGuard],
      },
      {
        path: 'all',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'map',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'image',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'movie',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'other',
        loadChildren: () =>
          import('../table/all/all.module').then((m) => m.AllModule),
        canActivate: [AuthGuard],
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
