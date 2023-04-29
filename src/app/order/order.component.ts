import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Order } from './order.model';
import { OrderService } from './orders.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild('offcanvas') public childModal:ModalDirective;
  @ViewChild('f') orderForm: NgForm;
  data = {
    title: "Online Order",
    paragraph:"<p>I'm a paragraph. Click here to add your own text and edit me.<br>Let your users get to know you.</p>"
  }
  allProducts: any;
  productTitle: string;
  productDescription: string;
  productPrice: number;

  specialRequest: string = null;
  quantity: number=1 ;
  totalPrice: number;

  shoppingList: number = 0
  orders: Order[] = [];
  editFlag: boolean = false;
  editedIndex:number
  subTotal:number
  checkOut:boolean

  constructor(private dataService: DataService, private orderService: OrderService,private router:Router) { }
  ngOnInit() {
    console.log("started")
    this.checkOut=false
    this.dataService.getAllProducts().then(data => this.allProducts = data.products);
    
  }

  orderProduct(index: number) {
    this.editFlag = false
    this.dataService.getProduct(index + 1).then(data => {
      this.productTitle = data.title;
      this.productDescription = data.description;
      this.productPrice = data.price;
      this.calculateTotal();

    })

  }

  calculateTotal() {
    this.totalPrice = this.productPrice * this.quantity;
    this.calcSubTotal();
  }

  addOrder() {
    const order = new Order(this.productTitle, this.productDescription,this.specialRequest,
       this.quantity, this.productPrice, this.totalPrice)
   
    this.orderService.setOrder(order);
    this.setShoppingFlag()
    this.resetForm()
  }

  getOrders() {
    this.orders = this.orderService.getOrders()
    this.calcSubTotal();
  }
  editOrder(i: number) {
    this.editFlag = true
    this.editedIndex=i;
    const order: Order = this.orderService.getOrder(i)
    this.productTitle = order.name;
    this.productDescription = order.description;
    this.productPrice = order.price;
    this.quantity=order.quantity
    this.specialRequest=order.specialRequest;
    this.calculateTotal();
  }

  resetForm() {
    this.quantity = 1
    this.specialRequest = null
  }

  setShoppingFlag() {
    this.shoppingList = this.orderService.orders.length;
  }

  saveEditOrder(){
    this.editFlag=false;
    const order = new Order(this.productTitle, this.productDescription,this.specialRequest,
                  this.quantity, this.productPrice, this.totalPrice)
    this.orderService.editOrder(this.editedIndex,order)

  }
  removeOrder(index:number){
    console.log(index)
    this.editFlag==false;
    this.orders=this.orderService.removeOrder(index);
    // console.log(this.orders)
  }

  calcSubTotal(){
    this.subTotal=0;
    this.orders.forEach(order=> {this.subTotal+=order.totalPrice})

  }
  goCheckOut(){
    this.router.navigate(['checkOut'])
   
    
    
  }

}


