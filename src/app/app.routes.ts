import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/homepage/homepage').then((c) => c.Homepage),
  },
  {
    path: 'homepage',
    loadComponent: () => import('./pages/homepage/homepage').then((c) => c.Homepage),
  },
];
