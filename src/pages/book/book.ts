import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IsbnProvider} from '../../providers/isbn/isbn';
import {Book} from '../../providers/isbn/book';

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
  book : Book;
  err;

  constructor(public navCtrl: NavController, public navParams: NavParams,private isbn: IsbnProvider) {
  }

  ionViewDidLoad() {
    const isbn = this.navParams.get('isbn');
    this.isbn.getBookByIsbn(isbn).subscribe(
      (book)=> {
        this.book = book;
      }, (err) => {
        this.err = err;
      }
    )

  }

}
