import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from '../isbn/book';
import {CONFIG} from '../../config';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HistoryProvider Provider');
  }

  getHistoryForCurrentUser(): Observable<Book[]> {
    return this.http.get<Book[]>(CONFIG.api.url() + 'history/');
  }

}
