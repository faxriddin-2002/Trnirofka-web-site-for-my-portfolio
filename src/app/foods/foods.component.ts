import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../foods.service';


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  constructor(private y: FoodsService) { }
  indax: number = 0;
  foods: any;
  tims: any;
  days: string[]=[];
  ngOnInit(): void {
    this.foods = this.y.foods;
    this.tims = this.y.tims;
    this.days = this.y.days;
  }

  go1() {
    const text:any = document.querySelector(".page4-text");
    const img: any = document.querySelector(".page4-img");
    text.style.left= "0px";
    img.style.right= "0px";
  }




 

}
