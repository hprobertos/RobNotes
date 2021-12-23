import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowsPage } from './shows.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShowsPageRoutingModule } from './shows-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ShowsPageRoutingModule
  ],
  declarations: [ShowsPage]
})
export class ShowsPageModule {}
