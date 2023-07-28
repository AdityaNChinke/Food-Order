import { Injectable } from '@angular/core';
import { Foods } from 'src/app/types/food';
import { Tag } from 'src/app/types/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getfoodById(id: number): Foods {
    return this.getAllImages().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    if (tag == "All".toLowerCase()) {
      return this.getAllImages()
    }
    else {

    }
    return this.getAllImages().filter(food => food.tags?.includes(tag));

  }

  getAllTag(): Tag[] {
    return [
      { name: 'all', count: 8 },
      { name: 'fast Food', count: 7 },
      { name: 'Pizza', count: 2 },
      { name: 'veg', count: 3 },
      { name: 'Cold Drink', count: 1 },
      { name: 'Chicken', count: 3 }];

  }


  //brought images from assets folder
  //data is of type string
  getAllImages(): Foods[] {
    return [
      {
        id: 1,
        price: 70,
        name: "Coca Cola",
        favourite: false,
        stars: 4.0,
        tags: ["Cold Drink", "Fast Food"],
        imageUrl: "/assets/food-1.webp",
        cookTime: "40-50",
        origin: ["U.S.A"]

      },
      {
        id: 2,
        price: 100,
        name: "Hot Dog",
        favourite: false,
        stars: 3.5,
        tags: ["Chicken", "fast Food"],
        imageUrl: "/assets/food-2.avif",
        cookTime: "50-60",
        origin: ["U.S.A"]
      },
      {
        id: 3,
        price: 150,
        name: "Pizza",
        favourite: true,
        stars: 4.0,
        tags: ["Pizza", "Chicken", "fast Food"],
        imageUrl: "/assets/food-3.jpg",
        cookTime: "60-80",
        origin: ["Italy"]
      },
      {
        id: 4,
        price: 50,
        name: "French Fries",
        favourite: false,
        stars: 4.0,
        tags: ["fast Food"],
        imageUrl: "/assets/food-4.jpg",
        cookTime: "40-50",
        origin: ["Belgium"]
      },
      {
        id: 5,
        price: 90,
        name: "Burger",
        favourite: false,
        stars: 4.2,
        tags: ["Chicken", "fast Food"],
        imageUrl: "/assets/food-5.jpg",
        cookTime: "50-60",
        origin: ["Germany"]
      },
      {
        id: 6,
        price: 120,
        name: "Tomato Pizza",
        favourite: false,
        stars: 4.0,
        tags: ["Pizza", "veg", "fast Food"],
        imageUrl: "/assets/food-6.jpg",
        cookTime: "60-80",
        origin: ["Italy"]
      },
      {
        id: 7,
        price: 100,
        name: "Veg Burger",
        favourite: false,
        stars: 4.0,
        tags: ["veg", "fast Food"],
        imageUrl: "/assets/food-7.jpg",
        cookTime: "40-50",
        origin: ["U.S.A"]
      },
      {
        id: 8,
        price: 140,
        name: "Cheese Pizza",
        favourite: false,
        stars: 4.0,
        tags: ["veg", "fast Food"],
        imageUrl: "/assets/food-8.jpg",
        cookTime: "60-80",
        origin: ["U.S.A"]
      }


    ]
  }
}


// "/assets/food-1.webp",
// "/assets/food-2.avif",
// "/assets/food-3.jpg",
// "/assets/food-4.jpg",
// "/assets/food-5.jpg",
// "/assets/food-6.jpg",
// "/assets/food-7.jpg",
// "/assets/food-8.jpg",