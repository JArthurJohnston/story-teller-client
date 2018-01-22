import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(email: string, password: string): Observable<string> {
    const loginBody = {email: email, password: password};
    return this.http.post('http://localhost:8080/login', loginBody);
  }

}
