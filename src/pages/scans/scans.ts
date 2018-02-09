import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChapterProvider} from "../../providers/chapter/chapter";

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
  scansUrls = [];
  err = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private chapterProvider: ChapterProvider) {
  }

  ionViewDidLoad() {
    this.chapterId = this.navParams.get('chapterId');
    this.chapterProvider.getScanList(this.chapterId).subscribe(
      (result)=> {
        this.scansUrls = result;
      }, (err) => {
        this.err = err;
      }
    )
  }

}
