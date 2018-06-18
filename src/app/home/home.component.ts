import {Component,OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../services/userService';

@Component({
  selector:'home',
  templateUrl:'./home.component.html'
})

export class HomeComponent implements OnInit{
  constructor(private userService:UserService){}
  selectedUser:User;
  USERS:User[];

  ngOnInit(){
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(data=>{this.USERS=data;console.log(data);})
  }

  deleteProfile(user:User){
    this.userService.deleteUser(user.id)
    .subscribe(success=>{console.log('succ comp');this.USERS=this.USERS.filter(u=>u!==user)})
  }
}
