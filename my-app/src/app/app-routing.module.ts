import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'drive', pathMatch: 'full' },
      {
        path: 'drive',
        loadChildren: () =>
          import('./features/menu/menu.module').then((m) => m.MenuModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
