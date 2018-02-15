import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {BookPage} from '../book/book';
import {HistoryPage} from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  info = {};

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

  }

  ngOnInit(): void {
    this.navCtrl.remove(0,this.navCtrl.length())
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.navCtrl.push(BookPage,{isbn:barcodeData.text})
    }, (err) => {
      // An error occurred
    });
  }

  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }

}
