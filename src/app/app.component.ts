import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string="";
  password: string="";
  contact: Array<Object>=[{username:'',password:''}];
  submit()
  {
    this.username="pinky";
    this.password="hello";
  }
  addContact(){
    var a={username:this.username,password:this.password};
    this.contact.push(a);
  }
  show: boolean = true;
}
