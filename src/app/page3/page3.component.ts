import { Component, OnInit } from '@angular/core';
import { Page3sService } from "../page3s.service"

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  p: number=0;

  constructor( private y: Page3sService) { }

  ngOnInit(): void {
 
  }
   x: any = this.y.animet;
   x2: any = this.y.animet2;
   color2: boolean = false;
   left: boolean = false;
   d: number = 0;
   go(){
    let g:any = document.querySelector(".content");
    let i:any = document.querySelector("#left");
    let ii:any = document.querySelector("#right");
    if(this.d < this.y.animet.length){
        this.d ++;      
        this.left = true;
        this.p-= 300;
        g.style.left = this.p+"px";
        i.style.color="red";
        ii.style.color ="red";
    }else {
        i.style.color="black";
        ii.style.color ="red";
    }
    if(this.d%2 === 0){
          this.color2 = true;
    }else{
         this.color2 = false;
    }
  }

  back(){
    let i:any = document.querySelector("#left");
    let ii:any = document.querySelector("#right");
    let g:any = document.querySelector(".content");
    if(this.d > 0){
      this.d--;
      this.left = false;
      this.p+=300;
      g.style.left = this.p+"px";
      ii.style.color ="red";
      i.style.color="red";
    } else  {
      ii.style.color ="black";
      i.style.color="red";
    }
    //  let go: any = document.querySelector(".img-own");
    //  go.attr("src", this.img)
     if(this.d % 2 == 0){
       this.color2 = true;
     }else{
      this.color2 = false;
     }
   }

   
   go2(){
    let g:any = document.querySelector(".content2");
    let i:any = document.querySelector("#left1");
    let ii:any = document.querySelector("#right1");
    if(this.d < this.y.animet2.length){
        this.d ++;      
        this.left = true;
        this.p-= 300;
        g.style.left = this.p+"px";
        i.style.color="red";
        ii.style.color ="red";
    }else {
        i.style.color="black";
        ii.style.color ="red";
    }
    if(this.d%2 === 0){
          this.color2 = true;
    }else{
         this.color2 = false;
    }
  }

  back2(){
    let i:any = document.querySelector("#left1");
    let ii:any = document.querySelector("#right1");
    let g:any = document.querySelector(".content2");
    if(this.d > 0){
      this.d--;
      this.left = false;
      this.p+=300;
      g.style.left = this.p+"px";
      ii.style.color ="red";
      i.style.color="red";
    } else  {
      ii.style.color ="black";
      i.style.color="red";
    }
    //  let go: any = document.querySelector(".img-own");
    //  go.attr("src", this.img)
     if(this.d % 2 == 0){
       this.color2 = true;
     }else{
      this.color2 = false;
     }
   }

}
 













































