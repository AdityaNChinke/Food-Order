import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../types/food';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../types/tag';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //in below foods all images will come
  foods: Foods[] = [];
  
  constructor(private foodservice: FoodService,private router:ActivatedRoute) { 
      //got all images from food service
    //this.foods=this.foodservice.getAllImages();
//above by default home page will show  all the images
    
  }
//below logic to get images from given tag or search item in url
  ngOnInit(): void {
    this.router.params.subscribe(paramas=>{
      if(paramas['searchItem']){
        this.foods=this.foodservice.getAllImages().filter(food=>food.name.toLowerCase().includes(paramas['searchItem'].toLowerCase()))
      }
      else if(paramas['tag']){
        this.foods=this.foodservice.getAllFoodByTag(paramas['tag'])
      }
      
      else{
        this.foods=this.foodservice.getAllImages();
      }

    })
  
   
  }

}
