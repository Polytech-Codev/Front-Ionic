import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {CONFIG} from '../../config';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";


interface User {
  _id: string;
  email: string;
  name: string;
}

@Injectable()
export class AuthProvider {

  constructor(private http: HttpClient, private storage: Storage, private fb: Facebook) {
  }


  fbLogin(): Observable<any> {
    console.log('facebook login start');
    return Observable.fromPromise(this.fb.login(['public_profile', 'user_friends', 'email']))
      .catch(e => {
        console.log('Error logging into Facebook', e);
        return Observable.throw(e);
      })
      .map((res: FacebookLoginResponse) => {
        console.log('facebook login response', res);
        return this.http.post(CONFIG.api.url() + 'auth/facebook', {access_token: res.authResponse.accessToken})
      })
      .map(response => {
        console.log('facebook login backend response', response);
        console.log(response);
        const token = response['x-auth-token'];
        if (token) {
          this.storage.set('JWT_TOKEN', token);
        }
      });
  }


  getCurrentUser(): Observable<User> {
    return this.http.get<User>(CONFIG.api.url() + 'users/profile');
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
