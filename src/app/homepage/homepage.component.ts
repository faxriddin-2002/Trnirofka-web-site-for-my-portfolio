import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
   
  ngOnInit(): void {
  }
  RouteConfigLoadEnd(){
   let y: any = document.querySelector("#img");
   y.style.left = "0px";
 }  
  Homepage(y: any) {
    y.style.left = "-20px";
  }
  
  
  menu3: boolean = false;
  onDegMenu(){ 
     let deg: any = document.querySelector("#menu1");
     let y: any = document.querySelector("#real")
     if(deg.classList == "menu") {
       deg.classList.remove("menu");
       deg.classList.add("menu2");
       y.classList.add("navbar-real2");
       y.classList.remove("navbar-real");
       this.menu3 = false;
     }else{
      deg.classList.add("menu");
      deg.classList.remove("menu2");
      y.classList.remove("navbar-real2");
      y.classList.add("navbar-real");
      this.menu3 = true;
     }
 }
  

}
