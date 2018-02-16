import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {BookPage} from '../book/book';
import {HistoryPage} from '../history/history';
import {FirstRunPage} from "../pages";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  info = {};

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private authProvider: AuthProvider) {

  }


  ngOnInit(): void {
    this.authProvider.isAnonymous().subscribe(isAnonymous => {
      if(isAnonymous) {
        this.navCtrl.push(FirstRunPage);
      }
    })
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.navCtrl.push(BookPage, {isbn: barcodeData.text})
    }, (err) => {
      // An error occurred
    });
  }

  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }

}
