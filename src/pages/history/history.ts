import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HistoryProvider} from '../../providers/history/history';
import {BookHistory} from "../../providers/history/BookHistory";
import {BookPage} from "../book/book";

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  books : BookHistory[];
  err;

  constructor(public navCtrl: NavController, public navParams: NavParams,private hitoryProvider: HistoryProvider) {
  }

  ionViewDidLoad() {
    this.hitoryProvider.getHistoryForCurrentUser().subscribe(
      (books) => {
        this.books = books;
        console.log(books);
      }, (err) => {
        this.err = err;
      }
    )
  }

  goToBook(BookHistory) {
    this.navCtrl.push(BookPage,{isbn:BookHistory.book.isbn})
  }

}
