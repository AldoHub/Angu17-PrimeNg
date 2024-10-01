import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        'path': '', 
        loadComponent: () =>
        import('./components/user/user.component').then(
          (mod) => mod.UserComponent
        ),
      },
    {
        'path': 'add', 
        loadComponent: () =>
        import('./components/add-user/add-user.component').then(
          (mod) => mod.AddUserComponent
        ),
    },

];
