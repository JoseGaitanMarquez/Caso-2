import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages=[
    {
      title:'Main',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title:'Carnes',
      children:[
        {
          title:'Res',
          url: '/menu/res',
          icon: 'logo-ionic'
        },
        {
          title:'Pollo',
          url: '/menu/pollo',
          icon: 'logo-ionic'
        },
        {
          title:'Cerdo',
          url: '/menu/cerdo',
          icon: 'logo-ionic'
        }
      ]
    },
    {
      title:'Frutas y verduras',
      children:[
        {
          title:'Frutas',
          url: '/menu/frutas',
          icon: 'logo-ionic'
        },
        {
          title:'Verduras',
          url: '/menu/verduras',
          icon: 'logo-ionic'
        }
      ]
    },
    {
      title:'Lacteos',
      children:[
        {
          title:'Crema',
          url: '/menu/crema',
          icon: 'logo-ionic'
        },
        {
          title:'Huevos',
          url: '/menu/huevos',
          icon: 'logo-ionic'
        },
        {
          title:'Leche',
          url: '/menu/leche',
          icon: 'logo-ionic'
        },
        {
          title:'Quesos',
          url: '/menu/quesos',
          icon: 'logo-ionic'
        }
      ]
    },
    {
      title:'Pan y Tortillas',
      children:[
        {
          title:'Pan',
          url: '/menu/pan',
          icon: 'logo-ionic'
        },
        {
          title:'Tortillas',
          url: '/menu/tortillas',
          icon: 'logo-ionic'
        }
      ]
    },
    {
      title:'Jugos y Refrescos',
      children:[
        {
          title:'Juegos',
          url: '/menu/jugos',
          icon: 'logo-ionic'
        },
        {
          title:'Refrescos',
          url: '/menu/refrescos',
          icon: 'logo-ionic'
        }
      ]
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
