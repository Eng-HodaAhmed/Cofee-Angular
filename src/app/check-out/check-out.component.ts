import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../order/order.model'
import { OrderService } from '../order/orders.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  @ViewChild('f')userForm:NgForm;
  data = {
    title: "Check Out",
    paragraph:"<p>I'm a paragraph. Click here to add your own text and edit me.<br>Let your users get to know you.</p>"
  }
  user={
    firstName:'',
    lastName:'',
    email:'',
    phone:null
  }
  orders:Order[];
  subTotal:number=0;
  ordersNum:number;
  deliveryMethod:boolean=true;
  contact:boolean=false;
  payment:boolean=false;
  review:boolean=false;

  constructor(private orderService:OrderService){}
  ngOnInit(){
    this.orders=this.orderService.getOrders();
    this.ordersNum=this.orders.length
    this.orders.forEach(order => {
    this.subTotal+=order.totalPrice
  });

  }
  onDelivery(){
    this.deliveryMethod=false;
    this.contact=true
  }
  goDelivery(){
    this.deliveryMethod=true;
    this.contact =false; 
  }
 
  /*contact information meathods */
  onSubmit(){
  this.user.firstName= this.userForm.value.firstName;
  this.user.lastName=this.userForm.value.lastName;
  this.user.email=this.userForm.value.email;
  this.user.phone=this.userForm.value.phone;
  this.userForm.reset();
  this.payment=true
  this.contact=false
  }

  goContact(){
    this.contact=true
    this.payment=false
  }

    /*payment meathods */
    onPayment(){
      this.payment=false;
      this.review=true
    }

    goPayment(){
      this.payment=true
      this.review=false
    }

}
