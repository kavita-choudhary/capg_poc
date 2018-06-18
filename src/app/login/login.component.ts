import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl:'./login.component.html'
})
export class LoginComponent {
  constructor(private router:Router){}
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  user={
    username:'',
    password:''
  }
  isSubmitted: boolean = false;

  onSubmit(){
    this.isSubmitted = true;
    this.router.navigate(['/home']);
  }
 }
