import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from 'src/app/cart/cart.page';

@Component({
  selector: 'app-cerdo',
  templateUrl: './cerdo.page.html',
  styleUrls: ['./cerdo.page.scss'],
})
export class CerdoPage implements OnInit {

  cart=[];
  items=[];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart=this.cartService.getCart();
    this.items=this.cartService.getProducts(0);
    this.cartItemCount=this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }

  async openCart(product){
    let modal=await this.modalCtrl.create({
      component:CartPage,
      cssClass: 'cart'
    });
    modal.present();
    
  }
}
