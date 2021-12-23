import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: 'movies/:section',
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: 'movies/sections',
        loadChildren: () => import('../movies/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'shows',
        loadChildren: () => import('../shows/shows.module').then(m => m.ShowsPageModule)
      },
      {
        path: 'shows/:section',
        loadChildren: () => import('../shows/shows.module').then(m => m.ShowsPageModule)
      },
      {
        path: 'shows/sections',
        loadChildren: () => import('../shows/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'books',
        loadChildren: () => import('../books/books.module').then(m => m.BooksPageModule)
      },
      {
        path: 'books/:section',
        loadChildren: () => import('../books/books.module').then(m => m.BooksPageModule)
      },
      {
        path: 'books/sections',
        loadChildren: () => import('../books/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'games',
        loadChildren: () => import('../games/games.module').then(m => m.GamesPageModule)
      },
      {
        path: 'games/:section',
        loadChildren: () => import('../games/games.module').then(m => m.GamesPageModule)
      },
      {
        path: 'games/sections',
        loadChildren: () => import('../games/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/movies/sections',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/movies/sections',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
