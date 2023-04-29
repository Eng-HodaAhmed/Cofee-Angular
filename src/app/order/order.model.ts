export class Order{
        name:string;
        description:string;
        quantity:number;
        price:number;
        totalPrice:number;
        specialRequest:string
        constructor(name:string,description:string,specialReq:string,quantity:number,price:number,totalPrice:number){
            this.name=name;
            this.description=description;
            this.quantity=quantity;
            this.price=price;
            this.totalPrice=totalPrice;
            this.specialRequest=specialReq
        }
}