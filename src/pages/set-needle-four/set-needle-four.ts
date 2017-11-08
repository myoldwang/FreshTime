import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SetNeedleFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-set-needle-four',
    templateUrl: 'set-needle-four.html',
})
export class SetNeedleFourPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SetNeedleFourPage');
    }
    go_step_five(){
        this.navCtrl.push('SetNeedleFivePage');
    }
    back_step_three(){
        this.navCtrl.pop();
    }

}
