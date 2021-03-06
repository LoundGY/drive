import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGuard } from './common/guards/edit.guard';
import { AuthGuard } from './common/services/login/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'drive', pathMatch: 'full' },
      {
        path: 'drive',
        loadChildren: () =>
          import('./features/menu/menu.module').then((m) => m.MenuModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./features/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/users/users.module').then((m) => m.UsersModule),
        canActivate: [EditGuard],
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
