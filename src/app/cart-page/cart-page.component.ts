import { Component, OnInit } from '@angular/core';
import { Cart } from '../types/Cart';
import { CartService } from '../serice/cart.service';
import { CartItem } from '../types/cartitem';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
constructor(private cartservice:CartService){

this.setCart()
}

ngOnInit(): void {
  this.setCart()
}
setCart()
{
  this.cart=this.cartservice.getCart();
}

removeFromCart(cartItem:CartItem)
{
  this.cartservice.removeFromCart(cartItem.food.id);
  this.setCart();
}

changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity=parseInt(quantityInString);
  this.cartservice.changeQuantity(cartItem.food.id,quantity);
  this.setCart();
}

}
