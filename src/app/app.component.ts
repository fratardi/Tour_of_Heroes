import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 // title = 'Tour of Heroes';
  name = 'Angular ' + VERSION.major;
  title = 'Tour of Heroes';
}
