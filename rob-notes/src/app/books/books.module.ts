import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksPage } from './books.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BooksPageRoutingModule } from './book-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: BooksPage }]),
    BooksPageRoutingModule,
  ],
  declarations: [BooksPage]
})
export class BooksPageModule {}
