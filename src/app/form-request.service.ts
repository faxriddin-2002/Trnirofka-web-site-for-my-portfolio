import { Injectable } from '@angular/core';
import { Page6QuestionComponent } from"./page6-question/page6-question.component";
@Injectable({
  providedIn: 'root'
})
export class FormRequestService {

  constructor(private y:Page6QuestionComponent) {
    this.formElement = this.y.formObekt;
    alert(this.formElement); 
  }
  formElement: any = [];
  ngOnInit(): void {
  }
}
