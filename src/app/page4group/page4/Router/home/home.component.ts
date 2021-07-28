import { Component, OnInit } from '@angular/core';
import { PageServiceVideoService } from '../../../../go/page5video/page-service-video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private y: PageServiceVideoService) { }

  ngOnInit(): void {
  }
  videos: any =this.y.video;

}
