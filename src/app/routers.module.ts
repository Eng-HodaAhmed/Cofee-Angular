import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderComponent } from "./order/order.component";
import { ThisIsUsComponent } from "./this-is-us/this-is-us.component";

const routers:Routes=[
    {path:'',component:HomeComponent},
    {path:'this-is-us',component:ThisIsUsComponent},
    {path:'menu',component:MenuComponent},
    {path:'order',component:OrderComponent},
    {path:'checkOut',component:CheckOutComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'login',component:LoginComponent}
]
@NgModule({
imports:[RouterModule.forRoot(routers)],
exports:[RouterModule]
})
export class RoutersModule{

}