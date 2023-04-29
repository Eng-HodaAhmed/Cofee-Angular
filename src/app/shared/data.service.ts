import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



export interface DataResponse {  
    id:number ,
    title:string,
    description: string,
    price:number,
    discountPercentage:number,
    rating: number,
    stock:number,
    brand: string,
    category: string,
    thumbnail: string,
    images: [string]
}
@Injectable({providedIn:'root'})
export class DataService{
 constructor(private http:HttpClient){}
 //products=new Subject<any>();

 getAllProducts(){
    return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    
 }
 getProduct(index:number){
    return fetch('https://dummyjson.com/products/'+index)
    .then(res => res.json())
 }

}