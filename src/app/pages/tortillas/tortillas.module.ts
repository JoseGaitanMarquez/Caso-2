import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TortillasPageRoutingModule } from './tortillas-routing.module';

import { TortillasPage } from './tortillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TortillasPageRoutingModule
  ],
  declarations: [TortillasPage]
})
export class TortillasPageModule {}
