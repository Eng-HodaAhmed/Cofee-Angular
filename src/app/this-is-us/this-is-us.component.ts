import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-this-is-us',
  templateUrl: './this-is-us.component.html',
  styleUrls: ['./this-is-us.component.scss']
})
export class ThisIsUsComponent {

  title='This Is Us'
  paragraph='<p> We\'re big believers in the power of a good meal and a friendly place to eat it.<br> Stop by for fresh, locally sourced food, served with a warm smile.</p>'
  data={title:this.title,paragraph:this.paragraph}
}
