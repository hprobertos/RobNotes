import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPage } from './movies.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesPageRoutingModule {}
