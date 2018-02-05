import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scans',
  templateUrl: 'scans.html',
})
export class ScansPage {
  chapterId = '';
  scansUrls = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.chapterId = this.navParams.get('chapterId');
    /*this.chapterProvider.getChapterListByIsbn(this.isbn).subscribe(
      (mangaModel)=> {
        this.mangaModel = mangaModel;
      }, (err) => {
        this.err = err;
      }
    )*/
  }

}
