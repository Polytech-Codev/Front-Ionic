import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {BookPage} from '../book/book';
import {ChapterListPage} from "../chapter-list/chapter-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info = {};

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.navCtrl.push(BookPage,{isbn:barcodeData.text})
    }, (err) => {
      // An error occurred
    });
  }

  goToChapterList() {
    this.navCtrl.push(ChapterListPage,{isbn: '9782344006597'})
  }
}
