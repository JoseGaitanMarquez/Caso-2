import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private data=[
    {
      category: 'Cerdo',
      expanded: true,
      products:[
        {id:0,name:'Chuleta de cerdo ahumada por kg',price:'79.00',img:'assets/Carnes/Cerdo/chuleta.webp'},
        {id:1,name:'Pierna de cerdo por kg',price:'92.00',img:'assets/Carnes/Cerdo/Pierna.webp'},
        {id:2,name:'Costilla de cerdo por kg',price:'124.00',img:'assets/Carnes/Cerdo/Costillas.webp'},
        {id:3,name:'Milanesa de cerdo por kg',price:'92.00',img:'assets/Carnes/Cerdo/Milanesa.webp'},
        {id:4,name:'Lomo de cerdo por kg',price:'89.00',img:'assets/Carnes/Cerdo/Lomo.webp'},
        {id:5,name:'Cabeza de cerdo por kg',price:'46.00',img:'assets/Carnes/Cerdo/Cabeza.webp'},
      ]
    },
    {
      category: 'Res',
      expanded: true,
      products:[
        {id:0,name:'Carne molida de sirloin 90/10 por kg',price:'144.00',img:'assets/Carnes/Res/Sirlon90-10.webp'},
        {id:1,name:'Arrachera de res SuKarne marinada 600 g',price:'157.00',img:'assets/Carnes/Res/ArracheraSuK.webp'},
        {id:2,name:'Top sirloin de res por kg',price:'174.00',img:'assets/Carnes/Res/SirlonTop.webp'},
        {id:3,name:'Carne molida de ternera por kg',price:'209.00',img:'assets/Carnes/Res/molidaTer.webp'},
        {id:4,name:'Bistec de res por kg',price:'159.00',img:'assets/Carnes/Res/Bistec.webp'},
      ]
    },
    {
      category: 'Pollo',
      expanded: true,
      products:[
        {id:0,name:'Milanesa de pechuga de pollo por kg',price:'129.00',img:'assets/Carnes/Pollo/Milanesa.webp'},
        {id:1,name:'Pollo entero sin cortar 2.2 kg aprox',price:'37.00',img:'assets/Carnes/Pollo/Entero.webp'},
        {id:2,name:'Alitas de pollo por kg',price:'76.00',img:'assets/Carnes/Pollo/Alas.webp'},
        {id:3,name:'Pierna y muslo de pollo por kg',price:'29.50',img:'assets/Carnes/Pollo/Pierna.webp'},
      ]
    },
    {
      category: 'Pollo',
      expanded: true,
      products:[
        {id:0,name:'Milanesa de pechuga de pollo por kg',price:'129.00',img:'assets/Carnes/Pollo/Milanesa.webp'},
        {id:1,name:'Pollo entero sin cortar 2.2 kg aprox',price:'37.00',img:'assets/Carnes/Pollo/Entero.webp'},
        {id:2,name:'Alitas de pollo por kg',price:'76.00',img:'assets/Carnes/Pollo/Alas.webp'},
        {id:3,name:'Pierna y muslo de pollo por kg',price:'29.50',img:'assets/Carnes/Pollo/Pierna.webp'},
      ]
    },
    {
      category: 'Leche',
      expanded: true,
      products:[
        {id:0,name:'Leche Santa Clara light deslactosada 1',price:'23.00',img:'assets/Lacteos/Leche/SCL.webp'},
        {id:1,name:'Leche Santa Clara entera 1',price:'21.50',img:'assets/Lacteos/Leche/SCE.webp'},
        {id:2,name:'Leche Alpura Clásica 1',price:'21.00',img:'assets/Lacteos/Leche/Alpura.webp'},
      ]
    },
    {
      category: 'Crema',
      expanded: true,
      products:[
        {id:0,name:'Crema Alpura ácida regular 450 ml',price:'26.50',img:'assets/Lacteos/Crema/Alpura.webp'},
        {id:1,name:'Crema Lala entera 900 ml',price:'53.00',img:'assets/Lacteos/Crema/Lala.webp'},
        {id:2,name:'Crema Santa Clara entera 450 ml',price:'32.00',img:'assets/Lacteos/Crema/SC.webp'},
      ]
    },
    {
      category: 'Quesos',
      expanded: true,
      products:[
        {id:0,name:'Queso Oaxaca Lala reducido en grasa 400 g',price:'70.00',img:'assets/Lacteos/Quesos/LalaOx.webp'},
        {id:1,name:'Queso panela Lala 400 g',price:'44.00',img:'assets/Lacteos/Quesos/LalaPN.webp'},
        {id:2,name:'Queso cotija Del Parral rallado 300 g',price:'59.00',img:'assets/Lacteos/Quesos/Cotija.webp'},
      ]
    },
    {
      category: 'Huevos',
      expanded: true,
      products:[
        {id:0,name:'Huevo blanco San Juan 30 pzas',price:'70.00',img:'assets/Lacteos/Huevos/Sj30.webp'},
        {id:1,name:'Huevo blanco San Juan 18 pzas',price:'44.00',img:'assets/Lacteos/Huevos/Sj18.webp'},
      ]
    },
    {
      category: 'Frutas',
      expanded: true,
      products:[
        {id:0,name:'Plátano Chiapas por kg',price:'21.00',img:'assets/Frutas y Verduras/Frutas/Platano.webp'},
        {id:1,name:'Uva blanca sin semilla por kilos',price:'94.00',img:'assets/Frutas y Verduras/Frutas/uvasB.webp'},
        {id:2,name:'Manzana red delicious por kilo',price:'37.00',img:'assets/Frutas y Verduras/Frutas/ManzanaR.webp'},
        {id:3,name:'Limón sin semilla por kg',price:'37.90',img:'assets/Frutas y Verduras/Frutas/Limon.webp'},
        {id:4,name:'Naranja valencia por kilo',price:'19.90',img:'assets/Frutas y Verduras/Frutas/Naranja.webp'},
      ]
    },
    {
      category: 'Verduras',
      expanded: true,
      products:[
        {id:0,name:'Jitomate saladet por kilo',price:'37.00',img:'assets/Frutas y Verduras/Verduras/Jitomate.webp'},
        {id:1,name:'Cebolla blanca por kilo',price:'20.00',img:'assets/Frutas y Verduras/Verduras/Cebolla.webp'},
        {id:2,name:'Zanahoria por kilo',price:'19.90',img:'assets/Frutas y Verduras/Verduras/Zanahoria.webp'},
        {id:3,name:'Papa blanca alfa por kilo',price:'28.90',img:'assets/Frutas y Verduras/Verduras/Papa.webp'},
        {id:4,name:'Napa por kg',price:'54.00',img:'assets/Frutas y Verduras/Verduras/Napa.webp'},
      ]
    },
    {
      category: 'Pan',
      expanded: true,
      products:[
        {id:0,name:'Bolillo pza',price:'4.00',img:'assets/Pan y tortillas/Pan/Bolillo.webp'},
        {id:1,name:'Pan blanco Bimbo grande 680 g',price:'35.50',img:'assets/Pan y tortillas/Pan/Bbimbo.webp'},
        {id:2,name:'Pan integral Bimbo grande 680 g',price:'38.50',img:'assets/Pan y tortillas/Pan/Ibimbo.webp'},
      ]
    },
    {
      category: 'Tortillas',
      expanded: true,
      products:[
        {id:0,name:'Tortillas de harina La Perla para tacos 500 g',price:'26.50',img:'assets/Pan y tortillas/Tortillas/Ttortillas.webp'},
        {id:1,name:'Tortillas de harina Torti Ricas taqueras 50 pzas',price:'35.90',img:'assets/Pan y tortillas/Tortillas/Htortillas.webp'},
        {id:2,name:'Tortilla de harina Tirixkom casera 18 pzas',price:'27.50',img:'assets/Pan y tortillas/Tortillas/Harina.webp'},
      ]
    },
    {
      category: 'Jugos',
      expanded: true,
      products:[
        {id:0,name:'Jugo de naranja Jumex Unico Fresco sin pulpa 1',price:'19.00',img:'assets/Refrescos y Jugos/Jugos/Naranjas.webp'},
        {id:1,name:'Jugo de manzana Jumex Unico Fresco 1',price:'24.00',img:'assets/Refrescos y Jugos/Jugos/Manzana.webp'},
        {id:2,name:'Nectar Jumex durazno 1',price:'18.00',img:'assets/Refrescos y Jugos/Jugos/Durazno.webp'},
      ]
    },
    {
      category: 'Refrescos',
      expanded: true,
      products:[
        {id:0,name:'Refresco Coca Cola botella de 3',price:'41.00',img:'assets/Refrescos y Jugos/Refrescos/Coca.webp'},
        {id:1,name:'Refresco Sprite 3',price:'24.00',img:'assets/Refrescos y Jugos/Refrescos/Sprite.webp'},
        {id:2,name:'Refresco Sidral Mundet con jugo de manzana botella de 3',price:'29.00',img:'assets/Refrescos y Jugos/Refrescos/Mundet.webp'},
      ]
    }
  ];

  private pages=[];

  constructor() { }

  getProducts(){
    return this.data;
  }

  getPages(){
    return this.pages;
  }

  addProduct(product){
    this.pages.push(product);
  }
}
