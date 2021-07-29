import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page6-question',
  templateUrl: './page6-question.component.html',
  styleUrls: ['./page6-question.component.css']
})
export class Page6QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  input: any = "";
  texteare: any ="";
  onPageForm(event: any) {
    let y = event.target.value;
    if(y.length > 6 || y.type !== Number || y.type !== null) {
      this.input = y;
    }
  }

  onTextAreaChange(event: any) { 
    let y = event.target.value;
    if(y.length > 8 || y.type !== null) {
      this.texteare = event.target.value;
    }
}

formObekt: any = [];
  
  onSubmit(frm: any){
    let y = frm;
    this.formObekt.push(y);
    console.log(this.formObekt);
  }

}
