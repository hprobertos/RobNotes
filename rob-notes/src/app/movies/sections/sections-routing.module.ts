import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionsPage } from './sections.page';

const routes: Routes = [
  {
    path: '',
    component: SectionsPage
  },  {
    path: 'in-progress',
    loadChildren: () => import('./in-progress/in-progress.module').then( m => m.InProgressPageModule)
  },
  {
    path: 'backlog',
    loadChildren: () => import('./backlog/backlog.module').then( m => m.BacklogPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsPageRoutingModule {}
