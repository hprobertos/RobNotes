import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },  {
    path: 'sections',
    loadChildren: () => import('./sections/sections.module').then( m => m.SectionsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesPageRoutingModule {}
