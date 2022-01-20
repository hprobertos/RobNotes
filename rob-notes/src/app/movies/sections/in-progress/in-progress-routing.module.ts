import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InProgressPage } from './in-progress.page';

const routes: Routes = [
  {
    path: '',
    component: InProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InProgressPageRoutingModule {}
