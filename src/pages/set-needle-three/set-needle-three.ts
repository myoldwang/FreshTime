import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SetNeedleThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-set-needle-three',
    templateUrl: 'set-needle-three.html',
})
export class SetNeedleThreePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SetNeedleThreePage');
    }
    back_step_two(){
        this.navCtrl.pop();
    }
    go_step_four(){
        this.navCtrl.push('SetNeedleFourPage');
    }

}
