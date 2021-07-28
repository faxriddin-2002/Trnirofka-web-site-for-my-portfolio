import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    setInterval(setClock, 1000)
    const hourHand: any = document.querySelector(".hour");
    const secondHand: any = document.querySelector(".secund");
    const minutHand: any = document.querySelector(".minut");
    
     function setClock(){
       const curentDate: any = new Date();
       const secondRadio: any = (curentDate.getSeconds()); 
       const minutRadio: any = (secondRadio + curentDate.getMinutes()) / 60; 
       const hourRadio = (minutRadio + curentDate.getHours()) / 12;
      //  console.log(secondRadio, hourRadio, minutRadio); 
        setRotation(secondHand, secondRadio)
        setRotation(minutHand, minutRadio)
        setRotation(hourHand, hourRadio)
      }

      function setRotation(element: any, rotationRadio: any){
        element.style.setProperty("--rotation", rotationRadio * 5);
      const go = rotationRadio*360;
       console.log(go);
      } 

  }
   


}
// function setRotation(secondHand: Element | null, secondRadio: number) {
//   throw new Error('Function not implemented.');
// }

