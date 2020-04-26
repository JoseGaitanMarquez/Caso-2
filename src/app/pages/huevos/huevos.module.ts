import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuevosPageRoutingModule } from './huevos-routing.module';

import { HuevosPage } from './huevos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuevosPageRoutingModule
  ],
  declarations: [HuevosPage]
})
export class HuevosPageModule {}
