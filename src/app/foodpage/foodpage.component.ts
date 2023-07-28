import { Component, OnInit } from '@angular/core';
import { Foods } from '../types/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../service/food/food.service';
import { CartService } from '../serice/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food!:Foods;

constructor(private router:ActivatedRoute,private foodservice:FoodService,private cartservice:CartService,private routerr:Router){
 
  this.router.params.subscribe((paramas)=>{
    if(paramas['id'])
    {
      this.food=this.foodservice.getfoodById(paramas['id'])
    }
      })
}

ngOnInit(): void {
 
}

addtocart(){
  this.cartservice.addtoCart(this.food);
  this.routerr.navigateByUrl('/cart-page')
}

}
