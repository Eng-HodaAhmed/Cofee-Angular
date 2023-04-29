import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  Allproducts:any
  data={title:"Our Menu",paragraph:"<p>I'm a paragraph. Click here to add your own text and edit me.<br>Let your users get to know you.</p>"}
  constructor(private products:DataService){}
  ngOnInit(): void {
  this.products.getAllProducts().then(data =>this.Allproducts=data.products );
    
  }
  
  
}
