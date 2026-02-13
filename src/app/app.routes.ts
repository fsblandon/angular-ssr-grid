import { Routes } from '@angular/router';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
    },
    {
        path: 'characters',
        loadComponent: () =>
            import('./features/characters/pages/characters/characters').then(m => m.Characters),
        data: {
            RenderMode: RenderMode.Server
        }
    },
    {
        path: 'characters/:id',
        loadComponent: () =>
            import('./features/character-detail/pages/character-detail/character-detail').then(m => m.CharacterDetail)
    },
    {
        path: 'favorites',
        loadComponent: () =>
            import('./features/favorites/pages/favorites/favorites').then(m => m.Favorites)
    }

];
