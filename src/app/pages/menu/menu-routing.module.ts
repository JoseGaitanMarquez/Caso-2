import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/menu/main',
      pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../main/main.module').then( m => m.MainPageModule),
      },
      {
        path: 'res',
        loadChildren: () => import('../res/res.module').then( m => m.ResPageModule),
      },
      {
        path: 'pollo',
        loadChildren: () => import('../pollo/pollo.module').then( m => m.PolloPageModule),
      },
      {
        path: 'cerdo',
        loadChildren: () => import('../cerdo/cerdo.module').then( m => m.CerdoPageModule),
      },
      {
        path: 'frutas',
        loadChildren: () => import('../frutas/frutas.module').then( m => m.FrutasPageModule)
      },
      {
        path: 'verduras',
        loadChildren: () => import('../verduras/verduras.module').then( m => m.VerdurasPageModule)
      },
      {
        path: 'crema',
        loadChildren: () => import('../crema/crema.module').then( m => m.CremaPageModule)
      },
      {
        path: 'huevos',
        loadChildren: () => import('../huevos/huevos.module').then( m => m.HuevosPageModule)
      },
      {
        path: 'leche',
        loadChildren: () => import('../leche/leche.module').then( m => m.LechePageModule)
      },
      {
        path: 'quesos',
        loadChildren: () => import('../quesos/quesos.module').then( m => m.QuesosPageModule)
      },
      {
        path: 'pan',
        loadChildren: () => import('../pan/pan.module').then( m => m.PanPageModule)
      },
      {
        path: 'tortillas',
        loadChildren: () => import('../tortillas/tortillas.module').then( m => m.TortillasPageModule)
      },
      {
        path: 'jugos',
        loadChildren: () => import('../jugos/jugos.module').then( m => m.JugosPageModule)
      },
      {
        path: 'refrescos',
        loadChildren: () => import('../refrescos/refrescos.module').then( m => m.RefrescosPageModule)
      },
    ]
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
