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
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./home/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'ketersediaan-kamar',
        loadComponent: () =>
          import('./home/ketersediaan-kamar/ketersediaan-kamar.component').then(
            (m) => m.KetersediaanKamarComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
