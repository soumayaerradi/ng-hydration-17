import { Routes } from '@angular/router';
import {homeResolver} from "./features/home/home.resolver";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component')
        .then((m) => m.HomeComponent),
    resolve: {
      homeResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
