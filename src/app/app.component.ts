import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  count:number=0;
  imageHide:boolean=true;
  buttonPressed(){
    this.count++;
  
  }
  
  imageClick(){
    this.imageHide =false;
  }

  
}
