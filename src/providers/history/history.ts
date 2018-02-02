import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config';
import {BookHistory} from "./BookHistory";

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

  getHistoryForCurrentUser(): Observable<BookHistory[]> {

  //  const headers = new HttpHeaders().set('manga-drein-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNzQzMjcwNTE3NzU2MzBkMDM3OTUyNCIsIm5hbWUiOiJUZXN0IEh1bWFuIiwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNTE3NTY2MzEwLCJleHAiOjE1NDkxMDIzMTB9.Hu3-BN00Nx_CiTB_lG1Ec4socwUa6KMCRhBYOPiVjM8');

    return this.http.get<BookHistory[]>(CONFIG.api.url() + 'users/history/'
      /*,
      {
        headers: new HttpHeaders({'manga-drein-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNzQzMjcwNTE3NzU2MzBkMDM3OTUyNCIsIm5hbWUiOiJUZXN0IEh1bWFuIiwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNTE3NTY2MzEwLCJleHAiOjE1NDkxMDIzMTB9.Hu3-BN00Nx_CiTB_lG1Ec4socwUa6KMCRhBYOPiVjM8'})
      }*/
      );
  }

}
