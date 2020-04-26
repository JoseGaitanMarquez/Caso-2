import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuesosPageRoutingModule } from './quesos-routing.module';

import { QuesosPage } from './quesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuesosPageRoutingModule
  ],
  declarations: [QuesosPage]
})
export class QuesosPageModule {}
