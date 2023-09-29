import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLogicalTopics';

  loginText = 'Login';
  signUpText = 'Sign Up'; 
  lessons = ['Lesson 1', 'Lessons 2'];

  totalEstimate = 10;
  ctx = {estimate: this.totalEstimate};

  
  login() {console.log('Login');  }

  signUp() {  console.log('Sign Up'); }

}
