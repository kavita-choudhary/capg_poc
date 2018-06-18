import {Injectable } from '@angular/core';
import { User } from '../user';
//import {USERS} from '../mock-users';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class UserService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/users';  // URL to web api
  constructor(private http: Http) { }
  getUsers():Observable<User[]>{
    return this.http.get(this.heroesUrl).map(response=>response.json().data).catch(this.handleError)
  }
  getUser(id:number):Observable<User>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).map(response=>response.json().data).catch(this.handleError);
  }
  deleteUser(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(success=>console.log('success')).catch(this.handleError)
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.heroesUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .map(success=>{console.log('edit done')})
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return error.message||error;
  }
}
