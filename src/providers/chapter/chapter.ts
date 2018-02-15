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
    return Observable.create(observer => {
      this.storage.get('JWT_TOKEN').then((token) => {
        this.http.get<MangaModel>(CONFIG.api.url() + 'manga/chapters/' + isbn).subscribe(
          mangaModel => {
            observer.next(mangaModel);
            observer.complete();
          },error2 => {
            observer.error(error2);
            observer.complete();
          }
        );
      });
    });
  }

  getScanList(chapterId: string): Observable<string[]> {
    return Observable.create(observer => {
      this.storage.get('JWT_TOKEN').then((token) => {
        const headers = new  HttpHeaders().set('manga-drein-access-token',token);
        this.http.get<string[]>(CONFIG.api.url() + 'manga/chapter/scans/' + chapterId,{headers:headers}).subscribe(
          scans => {
            observer.next(scans);
            observer.complete();
          },error2 => {
            observer.error(error2);
            observer.complete();
          }
        );
      });
    });
  }

}
