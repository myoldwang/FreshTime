import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SetNeedleFivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-needle-five',
  templateUrl: 'set-needle-five.html',
})
export class SetNeedleFivePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
       console.log('ionViewDidLoad SetNeedleFivePage');
    }
    back_step_four(){
        this.navCtrl.pop()
    }
    go_step_finish(){
        this.navCtrl.push('SetNeedleFinishPage');
    }
}
