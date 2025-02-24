import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (h) => h.HomePageComponent
      ),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/docs-container-page/docs-container-page.component').then(
        (h) => h.DocsContainerPageComponent
      ),
  },
  {
    path: '',
    redirectTo: 'docs',
    pathMatch: 'full',
  },
];
