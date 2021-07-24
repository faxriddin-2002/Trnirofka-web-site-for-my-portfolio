import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() {
    
   }
  
  ngOnInit(): void {

  }
  go :boolean = false;
  no(event: any) {
    this.go = false;
    let y:any =document.querySelector(".about-text");
  if(event.innerText == "Remove") {
    event.innerText = "Read More";
    this.go = false;
    y.style.right ="0px";
     y.style.transition= "2s";
  }else {
    event.innerText = "Remove";
    this.go = true;
    y.style.right ="-700px";
     y.style.transition= "2s";
  }
  }
  
  text(){
    let y:any =document.querySelector(".about-text");
    y.style.right ="0px";
     y.style.transition= "2s";
  }
 
 
}