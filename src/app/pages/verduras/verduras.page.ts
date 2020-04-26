import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { ModalController } from '@ionic/angular';
import { CartPage } from 'src/app/cart/cart.page';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {

  cart=[];
  items=[];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart=this.cartService.getCart();
    this.items=this.cartService.getProducts(8);
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
