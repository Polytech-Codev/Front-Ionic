import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config';
import {MangaModel} from "./mangaModel";

/*
  Generated class for the ChapterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChapterProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IsbnProvider Provider');
  }

  getChapterListByIsbn(isbn: string): Observable<MangaModel> {
    return this.http.get<MangaModel>(CONFIG.api.url() + 'manga/chapters/' + isbn);
  }

}
