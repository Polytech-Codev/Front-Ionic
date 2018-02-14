import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {MangaModel} from "../../providers/chapter/mangaModel";
import {ChapterProvider} from "../../providers/chapter/chapter";
import {ScansPage} from "../scans/scans";
import {HomePage} from "../home/home";
import {BookPage} from "../book/book";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private chapterProvider: ChapterProvider,
    private alertCtrl: AlertController,
  ) {
  }

  ionViewDidLoad() {
    this.isbn = this.navParams.get('isbn');
    this.chapterProvider.getChapterListByIsbn(this.isbn).subscribe(
      (mangaModel) => {
        this.mangaModel = mangaModel;
      }, (err) => {
        this.err = err;
        let alert = this.alertCtrl.create({
          title: err.status == 404 ? "Manga introuvable" : "Erreur",
          message: 'La lecture n\'est malheureusement pas disponnible pour ce manga. \nDésolé.',
          buttons: [
            {
              text: 'Go home',
              handler: () => {
                this.navCtrl.push(HomePage)
              }
            },
          ]
        });
        alert.present();
      }
    )
  }

  goToScans(chapter) {
    this.navCtrl.push(ScansPage, {chapterId: chapter.id})
  }

}
