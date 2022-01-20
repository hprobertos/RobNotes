import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacklogPage } from './backlog.page';

const routes: Routes = [
  {
    path: '',
    component: BacklogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacklogPageRoutingModule {}
