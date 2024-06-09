import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pagina/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'ingles',
    loadComponent: () => import('./pagina/ingles/ingles.page').then( m => m.InglesPage)
  },
  
  {
    path: 'matematica',
    loadComponent: () => import('./pagina/matematica/matematica.page').then( m => m.MatematicaPage)
  },
  {
    path: 'crie',
    loadComponent: () => import('./pagina/crie/crie.page').then( m => m.CriePage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./pagina/cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'decks',
    loadComponent: () => import('./pagina/decks/decks.page').then( m => m.DecksPage)
  }

  
];
