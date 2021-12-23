import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsPage } from './shows.page';

const routes: Routes = [
  {
    path: '',
    component: ShowsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsPageRoutingModule {}
