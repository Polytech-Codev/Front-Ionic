import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {IsbnProvider} from '../../providers/isbn/isbn';
import {Book} from '../../providers/isbn/book';
import {ChapterListPage} from "../chapter-list/chapter-list";
import {HomePage} from "../home/home";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  isbn = '';
  book : Book;
  err;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private isbnProvider: IsbnProvider,
    private alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    this.isbn = this.navParams.get('isbn');
    this.isbnProvider.getBookByIsbn(this.isbn).subscribe(
      (book)=> {
        this.book = book;
      }, (err) => {
        this.err = err;

        let alert = this.alertCtrl.create({
          title: err.status == 404 ? "Manga introuvable":"Erreur",
          message: 'Le manga est actuellement introuvable dans la base de données. \n Désolé.',
          buttons: [
            {
              text: 'Go home',
              handler: () => {
                this.navCtrl.push(HomePage)
              }
            },
            {
              text: 'Try Again',
              handler: () => {
                this.barcodeScanner.scan().then((barcodeData) => {
                  this.navCtrl.push(BookPage,{isbn:barcodeData.text})
                }, (err) => {
                  // An error occurred
                });
              }
            }
          ]
        });
        alert.present();
      }
    )
  }

  goToChapterList() {
    this.navCtrl.push(ChapterListPage,{isbn: this.isbn})
  }
}
