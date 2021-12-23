import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPage } from './books.page';

const routes: Routes = [
  {
    path: '',
    component: BooksPage,
  },  {
    path: 'sections',
    loadChildren: () => import('./sections/sections.module').then( m => m.SectionsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksPageRoutingModule {}
