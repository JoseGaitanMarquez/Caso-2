import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefrescosPage } from './refrescos.page';

const routes: Routes = [
  {
    path: '',
    component: RefrescosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefrescosPageRoutingModule {}
