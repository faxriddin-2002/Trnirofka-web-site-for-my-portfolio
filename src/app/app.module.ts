import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page2Component }  from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page3sService } from './page3s.service';
import { Page4Component } from './page4group/page4/page4.component';
import { FoodsComponent } from './page4group/page4/foods/foods.component';
import { ClockComponent } from './page4group/page4/clock/clock.component';
import { FittnessComponent } from './page4group/page4/fittness/fittness.component'
import { FoodsService } from './page4group/page4/foods.service';
import { Page5Component } from './go/page5video/page5/page5.component';
import { Page5TexComponent } from './go/page5video/page5-tex/page5-tex.component';
import { Page5videoComponent } from './go/page5video/page5video.component';
import { PageService3Service  } from './go/page5video/page-service3.service'
import { PageServiceVideoService } from './go/page5video/page-service-video.service';
import { HomeComponent } from './page4group/page4/Router/home/home.component';
import { YourVideoComponent } from './page4group/page4/Router/your-video/your-video.component';
import { HistoryComponent } from './page4group/page4/Router/history/history.component';
import { FevorytChanelComponent } from './page4group/page4/Router/fevoryt-chanel/fevoryt-chanel.component';
import { RouterModule, Routes } from '@angular/router';
import { Page6Component } from './page6/page6.component';
import { Page6QuestionComponent } from './page6-question/page6-question.component';
import { QuestionService } from './question.service';
import { FooterComponent } from './footer/footer.component';

const routercha: Routes = [
  {path: ' ', component: HomeComponent},
  {path: 'yourVideo', component: YourVideoComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'Fevoryte', component: FevorytChanelComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    ClockComponent,
    Page5Component,
    Page5TexComponent,
    Page5videoComponent,
    FoodsComponent,
    FittnessComponent,
    HomeComponent,
    YourVideoComponent,
    HistoryComponent,
    FevorytChanelComponent,
    Page6Component,
    Page6QuestionComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routercha),
  ],
  providers: [Page3sService, FoodsService, PageService3Service, PageServiceVideoService,  QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
