import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service'

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {

  constructor(private question: QuestionService) { }

  ngOnInit(): void {
  }

  questions: any = this.question.ansver;
  tex: boolean = false;
  open(go: any) {
    let i2:any = document.querySelector("#i2");
    let i1:any = document.querySelector("#i1");
    if(this.tex === false){
      i2.style.display = "block";
      i1.style.display = "none";
      this.tex = true;
    }
   go.style.height = "auto";
  }


  cloth(go2: any){
    let i1:any = document.querySelector("#i1");
    let i2:any = document.querySelector("#i2");
    if(this.tex === true){
      i1.style.display = "block";
      i2.style.display = "none";
      this.tex = false;
    }
    go2.style.height = "40px";
  }
   
  buttonjon: boolean = false;
  onAnsver(){
    if(this.buttonjon === false){
       this.buttonjon = true;
       let t: any = document.querySelector(".h6text");
       t.innerText = "Go Back";
      }else{ 
        this.buttonjon =false;
        let t: any = document.querySelector(".h6text");
        t.innerText = "You`re Question";
    }
  }
}
