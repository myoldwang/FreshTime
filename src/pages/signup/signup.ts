import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { routeOptions } from '../pages';

/**z
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    options:NativeTransitionOptions = routeOptions;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private nativePageTransitions: NativePageTransitions,
    ) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad SignupPage');
    }
    backToLogin(){
        this.nativePageTransitions.fade(this.options)
        this.navCtrl.pop();
    }
}
