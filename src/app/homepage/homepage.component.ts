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
    y.style.left = "-200px";
  }

}
