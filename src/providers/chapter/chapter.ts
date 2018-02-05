import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config';
import {MangaModel} from "./mangaModel";
import {Storage} from "@ionic/storage";

/*
  Generated class for the ChapterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChapterProvider {

  constructor(public http: HttpClient,private storage: Storage) {
    console.log('Hello IsbnProvider Provider');
  }

  getChapterListByIsbn(isbn: string): Observable<MangaModel> {
    console.log("getChapterListByIsbn start");
    return Observable.create(observer => {
      this.storage.get('JWT_TOKEN').then((token) => {
        console.log('getChapterListByIsbn : ',token);

        const headers = new  HttpHeaders().set('manga-drein-access-token',token);
        console.log('getChapterListByIsbn : ',headers);

        this.http.get<MangaModel>(CONFIG.api.url() + 'manga/chapters/' + isbn,{headers:headers}).subscribe(
          mangaModel => {
            console.log('getChapterListByIsbn : ',mangaModel);
            observer.next(mangaModel);
            observer.complete();
          },error2 => {
            console.log('getChapterListByIsbn : ',error2);
            observer.error(error2);
            observer.complete();
          }
        );
      });
    });
  }

}
