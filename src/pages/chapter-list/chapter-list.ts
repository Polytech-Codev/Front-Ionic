import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MangaModel} from "../../providers/chapter/mangaModel";
import {ChapterProvider} from "../../providers/chapter/chapter";
import {ScansPage} from "../scans/scans";

/**
 * Generated class for the ChapterListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-list',
  templateUrl: 'chapter-list.html',
})
export class ChapterListPage {
  isbn = '';
  mangaModel: MangaModel;
  err;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chapterProvider: ChapterProvider) {
  }

  ionViewDidLoad() {
    this.isbn = this.navParams.get('isbn');
    this.chapterProvider.getChapterListByIsbn(this.isbn).subscribe(
      (mangaModel)=> {
        this.mangaModel = mangaModel;
      }, (err) => {
        this.err = err;
      }
    )
  }

  goToScans(chapter) {
    this.navCtrl.push(ScansPage,{chapterId:chapter.id})
  }

}
