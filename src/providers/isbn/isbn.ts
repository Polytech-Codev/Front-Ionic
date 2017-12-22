import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';
import {CONFIG} from '../../config';

/*
  Generated class for the IsbnProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IsbnProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IsbnProvider Provider');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(CONFIG.api.url() + 'manga/' + isbn);
  }

}
