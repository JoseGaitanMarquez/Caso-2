import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LechePageRoutingModule } from './leche-routing.module';

import { LechePage } from './leche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LechePageRoutingModule
  ],
  declarations: [LechePage]
})
export class LechePageModule {}
