
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 username: string;
 password: string;
 submit()
 {
   this.username="pinky";
   this.password="hello";
 }
 show: boolean = true;
}
