import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies/sections',
        loadChildren: () => import('../movies/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'movies/sections/:section',
        loadChildren: () => import('../movies/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'shows/sections',
        loadChildren: () => import('../shows/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'shows/sections/:section',
        loadChildren: () => import('../shows/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'books/sections',
        loadChildren: () => import('../books/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'books/sections/:section',
        loadChildren: () => import('../books/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'games/sections',
        loadChildren: () => import('../games/sections/sections.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'games/sections/:section',
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
