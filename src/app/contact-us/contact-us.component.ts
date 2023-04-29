import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  data={title:"Let's Connect",paragraph:"<p>I'm a paragraph. Click here to add your own text and edit me.<br>Let your users get to know you.</p>"}
ngOnInit() {
  
}

}

