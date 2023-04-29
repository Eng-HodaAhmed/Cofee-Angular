import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './shared/main/main.component';
import { ThisIsUsComponent } from './this-is-us/this-is-us.component';
import { RouterModule } from '@angular/router';
import { RoutersModule } from './routers.module';
import {HttpClientModule} from '@angular/common/http'
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './login/login.component';
import { AccordionModule } from 'ngx-bootstrap/accordion'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    MainComponent,
    ThisIsUsComponent,
    MenuComponent,
    OrderComponent,
    CheckOutComponent,
    ContactUsComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    RoutersModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AccordionModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
