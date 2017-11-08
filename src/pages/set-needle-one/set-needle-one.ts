import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SetNeedleOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-set-needle-one',
    templateUrl: 'set-needle-one.html',
})
export class SetNeedleOnePage {

    constructor(public navCtrl: NavController,
    ) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad SetNeedleOnePage');
    }
    setone_back_home(){
        this.navCtrl.pop();
    }
    go_step_two(){
        this.navCtrl.push('SetNeedleTwoPage');
    }

}
