import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page2Component }  from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page3sService } from './page3s.service';
import { Page4Component } from './page4/page4.component';
import { FoodsComponent } from './foods/foods.component';
import { ClockComponent } from './clock/clock.component';
import { FittnessComponent } from './fittness/fittness.component';
import { FoodsService } from './foods.service';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    FoodsComponent,
    ClockComponent,
    FittnessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    // MatCheckboxModule
    // MatButtonModule
  ],
  providers: [Page3sService,FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
