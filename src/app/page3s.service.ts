import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Page3sService {


  constructor() { }

  animet = [
    {title:"Fitness", in: 1, price: "per Month  40%", learnmore: "See More", color: "#ff0000", img: "../../assets/trnirofka.png", class: "card1"},
     {title:"Yoga", in: 2, price: "per Month  30%", learnmore: "See More", color: "rgb(82, 80, 80)", img: "../../assets/trnirofka.png",class: "card1"}, 
     {title:"Seempl Atletica", in: 3, price: "per Month  30%", learnmore: "See More", color: "#ff0000", img: "../../assets/trnirofka.png", class: "card1"}, 
     {title:"Body Bulding", in: 4, price: "per Month  30%", learnmore: "See More", color: "rgb(82, 80, 80)", img: "../../assets/trnirofka.png", class: "card1"},
     {title:"PushonYour", in: 5, price: "per Month  30%", learnmore: "See More", color: "ff0000", img: "../../assets/trnirofka.png", class: "card1"} ];
  
  animet2 = [
       {title:"foods", in: 1, price: "per Month  40%", learnmore: "See More", color: "#ff0000", img: "../../assets/trnirofka.png", class: "card1"},
       {title:"Cooking", in: 2, price: "per Month  30%", learnmore: "See More", color: "rgb(82, 80, 80)", img: "../../assets/trnirofka.png",class: "card1"}, 
       {title:"Seempl Atletica", in: 3, price: "per Month  30%", learnmore: "See More", color: "#ff0000", img: "../../assets/trnirofka.png", class: "card1"}, 
       {title:"Body Bulding", in: 4, price: "per Month  30%", learnmore: "See More", color: "rgb(82, 80, 80)", img: "../../assets/trnirofka.png", class: "card1"},
       {title:"PushonYour", in: 5, price: "per Month  30%", learnmore: "See More", color: "ff0000", img: "../../assets/trnirofka.png", class: "card1"} ];
}
