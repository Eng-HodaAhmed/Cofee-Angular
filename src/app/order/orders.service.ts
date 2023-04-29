import { Injectable } from "@angular/core";
import { Order } from "./order.model";


@Injectable({providedIn:"root"})
export class OrderService{
orders:Order[]=[]

setOrder(order:Order){
    //console.log("inside" +this.orders)
    this.orders.push(order)
}

getOrders(){
    return this.orders
}

getOrder(i:number){
    return this.orders[i];
}
editOrder(index:number,order:Order){
    this.orders[index]=order
}
removeOrder(index:number){
   this.orders=this.orders.filter((element,i)=> {return index!==i})
   console.log(this.orders)
   return this.orders
}
}