import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Book} from '../../providers/isbn/book';
import {HistoryProvider} from '../../providers/history/history';
import {BookHistory} from "../../providers/history/BookHistory";

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
      (books)=> {
        this.books = books;
      }, (err) => {
        this.err = err;
      }
    )

  }

}
