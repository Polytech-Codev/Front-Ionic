import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {HomePage} from "../home/home";

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, private authProvider : AuthProvider) {
  }

  fbLogin() {
    this.authProvider.fbLogin().subscribe((success) => {
      console.log(success);
      console.log('User has been logged in');
      this.navCtrl.push(HomePage);
    },error2 => console.log(error2));
  }

}
