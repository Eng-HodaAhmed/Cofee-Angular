import { Component, Input, OnDestroy, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(){}
  @Input()data:{title:string,paragraph:string}=null;
  title:string
  paragraph:string
  ngOnInit(){
    this.title=this.data.title
    this.paragraph=this.data.paragraph

  }
 

}
