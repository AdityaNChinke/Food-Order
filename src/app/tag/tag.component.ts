import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../types/tag';
import { FoodService } from '../service/food/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit  {
@Input()
foodPagetags?:string[];
@Input()
justifyContent?:string='center';
tags?: Tag[]=[];

constructor(private foodservice:FoodService){}

  ngOnInit(): void {
    if(!this.foodPagetags){
    this.tags=this.foodservice.getAllTag()
    console.log(this.tags)
  }
}
}
