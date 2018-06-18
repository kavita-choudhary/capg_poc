import {Component, Input} from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {UserService} from '../services/userService';
import {Location} from '@angular/common';
@Component({
  selector:'user-details',
  templateUrl:'./details.component.html'
})

export class DetailsComponent{

  currentUser:User;
  user:any;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: UserService,
  private location : Location
) {}

ngOnInit() {
  this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getUser(+params.get('id')))
      .subscribe(user=>console.log(user);this.currentUser=user)
}

updateUser(user:User){
  this.service.updateUser(user).subscribe(success=>this.goBack())
}

goBack(){
  this.location.back();
}

}
