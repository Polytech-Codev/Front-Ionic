import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {CONFIG} from '../../config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private authSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private storage: Storage) {
    console.log('AuthProvider Provider');
    this.storage.get('JWT_TOKEN').then(token => {
      this.authSubject.next(!!token);
    });
  }

  public signup(user: { name: string, email: string, password: string }): Observable<boolean> {
    return this.http.post(CONFIG.api.url() + 'auth/signup', user).map((data: { token: string, success: boolean }) => {
      if (data.success) {
        this.storage.set('JWT_TOKEN', data.token);
        this.authSubject.next(true);
      }
      return data.success;
    });
  }

  public signin(credential: { email: string, password: string }): Observable<boolean> {
    return this.http.post(CONFIG.api.url() + 'auth/signin', credential).map((data: { token: string, success: boolean }) => {
      if (data.success) {
        this.storage.set('JWT_TOKEN', data.token);
        this.authSubject.next(true);
      }
      return data.success;
    });
  }

  public isAuthenticated(): Observable<boolean> {
    this.storage.get('JWT_TOKEN').then(token => {
      this.authSubject.next(!!token);
    });

    return this.authSubject.asObservable();
  }

  public logout(){
    this.authSubject.next(false);
    this.storage.set('JWT_TOKEN', null);
  }

}
