import { Component, OnInit } from '@angular/core';
import { PageService3Service } from '.././page-service3.service'
@Component({
  selector: 'app-page5-tex',
  templateUrl: './page5-tex.component.html',
  styleUrls: ['./page5-tex.component.css']
})
export class Page5TexComponent implements OnInit {

  constructor(private x: PageService3Service) { }

  ngOnInit(): void {
  }
 fitnessPlan: any[]= this.x.fitnessDay;
}
