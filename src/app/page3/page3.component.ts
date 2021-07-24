import { Component, OnInit } from '@angular/core';
import { Page3sService } from "../page3s.service"

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor( private y: Page3sService) { }

  ngOnInit(): void {
 


  }
   color2: boolean = false;
   d: number = 1;
   animation: boolean = false;
   element: any = this.y.animet[this.d];
   title: string ="";
   price: string = "";
   learn: string = "";
   img: string = "";
   go(){
    //  let go: any = document.querySelector("..img-own");
    //  go.attr("src", this.img)
     if(this.d < this.y.animet.length){
       this.animation = true;
       this.title = this.element.title;
       this.price = this.element.price;
       this.learn = this.element.learnmore;
       this.img = this.element.img;
       this.d += 1; 
      }
    if(this.d % 2 === 0){
          this.color2 = true;
    }else{
         this.color2 = false;
    }
    console.log(this.d)
    console.log(this.element)

  }

  back(){
    if(this.d > 0){
      this.animation = false;
      this.title = this.element.title;
      this.price = this.element.price;
      this.learn = this.element.learnmore;
      this.img = this.element.img;
      this.d -= 1;
    }
    //  let go: any = document.querySelector(".img-own");
    //  go.attr("src", this.img)
     if(this.d % 2 == 0){
       this.color2 = true;
     }else{
      this.color2 = false;
     }
     console.log(this.d)
     console.log(this.element)
   }


}
 













































