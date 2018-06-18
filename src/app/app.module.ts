import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {UserService} from './services/userService';
import {AppRoutingModule} from './routing';
import {HttpModule} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-users';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,AppRoutingModule, HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),
 ],
  declarations: [ AppComponent, LoginComponent , HomeComponent, DetailsComponent],
  providers : [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
