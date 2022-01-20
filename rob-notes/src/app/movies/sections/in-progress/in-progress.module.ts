import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InProgressPageRoutingModule } from './in-progress-routing.module';

import { InProgressPage } from './in-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InProgressPageRoutingModule
  ],
  declarations: [InProgressPage]
})
export class InProgressPageModule {}
