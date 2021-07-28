import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../foods.service';


@Component({
  selector: 'app-fittness',
  templateUrl: './fittness.component.html',
  styleUrls: ['./fittness.component.css']
})
export class FittnessComponent implements OnInit {

  constructor( private d: FoodsService) {

   }
  indax2: number = 0;
  fitnes: any;
  tims2: any;
  days2: string[]=[];
  
  ngOnInit(): void {
    this.fitnes = this.d.trnirofka;
    this.tims2 = this.d.tims2;
    this.days2 = this.d.days2;
  }

  go2() {
    const text1:any = document.querySelector(".page4-text1");
    const img1: any = document.querySelector(".page4-img1");
    text1.style.right= "0px";
    img1.style.left= "0px";
  }

}
