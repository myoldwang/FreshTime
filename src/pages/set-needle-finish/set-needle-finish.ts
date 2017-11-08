import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SetNeedleFinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-set-needle-finish',
    templateUrl: 'set-needle-finish.html',
})
export class SetNeedleFinishPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SetNeedleFinishPage');
    }
    back_step_five(){
        this.navCtrl.pop();
    }
    go_home(){
        this.navCtrl.push('HomePage');
    }

}
