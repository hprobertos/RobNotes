import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionsPage } from './sections.page';

const routes: Routes = [
  {
    path: '',
    component: SectionsPage
  },  {
    path: 'backlog',
    loadChildren: () => import('./backlog/backlog.module').then( m => m.BacklogPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsPageRoutingModule {}
