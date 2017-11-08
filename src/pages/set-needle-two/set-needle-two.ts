import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

/**
 * Generated class for the SetNeedleTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-needle-two',
  templateUrl: 'set-needle-two.html',
})
export class SetNeedleTwoPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SetNeedleTwoPage');
    }
    back_step_one(){
        this.navCtrl.pop();
    }
    presentLoadingCustom(){
        const loading = this.loadingCtrl.create({
            content:"正在搜索您的智能手表...",
            duration:3000,
            showBackdrop:true  //背景
        });
        loading.present();
        setTimeout(()=>{
            this.navCtrl.push('SetNeedleThreePage');
        },3000)
    }

}
