import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private fb: Facebook,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.fb.api('/me', ['public_profile', 'email', 'user_friends'])
      .then((res) => {
        console.log(JSON.stringify(res))
      })
      .catch((err) => {
        console.log(err);
      });

  }

  facebookLogin = () => {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }

  facebookLogout = () => {
    this.fb.logout()
      .then((res) => console.log('logout success'))
      .catch((err) => console.log('logout error'))
  }
}
