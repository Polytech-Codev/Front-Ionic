import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {CONFIG} from '../../config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

declare const FB: any;

interface User {
  _id: string;
  email: string;
  name: string;
}

@Injectable()
export class AuthProvider {

  constructor(private http: HttpClient, private storage: Storage) {
    FB.init({
      appId: '139920246702072',
      status: false, // the SDK will attempt to get info about the current user immediately after init
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: false,
      version: 'v2.8' // use graph api version 2.5
    });
  }


  fbLogin(): Observable<any> {
    return Observable.create(observer => {
      FB.login(result => {
        if (result.authResponse) {
          return this.http.post(CONFIG.api.url + 'auth/facebook', {access_token: result.authResponse.accessToken})
            .subscribe(response => {
              console.log(response);
              const token = response['x-auth-token'];
              if (token) {
                this.storage.set('JWT_TOKEN', token);
              }
              observer.next(response);
              observer.complete();
            }, error => {
              observer.error(error);
              observer.complete();
            });
        } else {
          observer.error('error');
          observer.complete();
        }
      }, {scope: 'public_profile,email'});
    });
  }


  getCurrentUser(): Observable<User> {
    return this.http.get<User>(CONFIG.api.url + 'users/profile');
  }

  public isAuthenticated(): Observable<boolean> {
    return this.getCurrentUser().map(user => true).catch(error => {
      console.error(error);
      return Observable.of(false);
    });
  }

  public isAnonymous(): Observable<boolean> {
    return this.isAuthenticated().map(auth => !auth);
  }

  public logout() {
    this.storage.set('JWT_TOKEN', null);
  }

}
