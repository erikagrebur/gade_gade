import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LogInScreenPage } from '../log-in-screen/log-in-screen';

/**
 * Generated class for the SignUpScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up-screen',
  templateUrl: 'sign-up-screen.html',
})
export class SignUpScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpScreenPage');
  }

  getLoginPage() {
    this.navCtrl.push(LogInScreenPage);
  }

}
