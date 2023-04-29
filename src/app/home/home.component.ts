import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private fragment: string;
  constructor(private router:Router,private route: ActivatedRoute){}
ngOnInit(){
  this.route.fragment.subscribe(fragment => {
    this.fragment = fragment;
  });
}
ngAfterViewInit(): void {
  try {
    document.querySelector('#' + this.fragment).scrollIntoView();
  } catch (e) {}
}

order(){
  this.router.navigate(['/order'])
}
menu(){
  this.router.navigate(['/menu'])
}
  
}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

