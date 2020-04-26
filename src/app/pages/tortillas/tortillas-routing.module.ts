import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TortillasPage } from './tortillas.page';

const routes: Routes = [
  {
    path: '',
    component: TortillasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TortillasPageRoutingModule {}
