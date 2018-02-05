import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IsbnProvider} from '../../providers/isbn/isbn';
import {Book} from '../../providers/isbn/book';
//import {ChapterListPage} from "../chapter-list/chapter-list";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private isbnProvider: IsbnProvider) {
  }

  ionViewDidLoad() {
    this.isbn = this.navParams.get('isbn');
    this.isbnProvider.getBookByIsbn(this.isbn).subscribe(
      (book)=> {
        this.book = book;
      }, (err) => {
        this.err = err;
      }
    )
  }
/*
  goToChapterList() {
    this.navCtrl.push(ChapterListPage,{isbn:this.isbn})
  }*/

}
