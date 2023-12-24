import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/ui/login-home/login-home.component').then(
        (m) => m.LoginHomeComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/ui/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
