import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Page3sService {


  constructor() { }

  animet = [
    {title:"Fitness", in: 1, price: "per Month  40%", learnmore: "See More", color: "#ff0000", img: "../../assets/trnirofka.png"},
     {title:"Yoga", in: 2, price: "per Month  30%", learnmore: "See More", color: "rgb(82, 80, 80)", img: "../../assets/trnirofka.png"}, 
     {title:"Seempl Atletica", in: 3, price: "per Month  30%", learnmore: "See More", color: "#ff0000", img: "../../assets/trnirofka.png"}, 
     {title:"Body Bulding", in: 4, price: "per Month  30%", learnmore: "See More", color: "rgb(82, 80, 80)", img: "../../assets/trnirofka.png"},
     {title:"PushonYour", in: 5, price: "per Month  30%", learnmore: "See More", color: "ff0000", img: "../../assets/trnirofka.png"} ];
}
