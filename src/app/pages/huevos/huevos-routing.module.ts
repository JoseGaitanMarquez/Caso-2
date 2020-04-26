import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuevosPage } from './huevos.page';

const routes: Routes = [
  {
    path: '',
    component: HuevosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuevosPageRoutingModule {}
