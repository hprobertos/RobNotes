import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacklogPageRoutingModule } from './backlog-routing.module';

import { BacklogPage } from './backlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacklogPageRoutingModule
  ],
  declarations: [BacklogPage]
})
export class BacklogPageModule {}
