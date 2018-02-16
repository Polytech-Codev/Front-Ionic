import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Storage} from "@ionic/storage";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/mergeMap";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public storage: Storage) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.fromPromise(this.storage.get('JWT_TOKEN'))
      .mergeMap((token)=> {
        request = request.clone({
          setHeaders: {
            'x-auth-token': `Bearer ${token}`
          }
        });
        return next.handle(request);
      })






  }
}
