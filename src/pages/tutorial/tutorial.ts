import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
    //slides: Array<{img: string, description: string}>;
    showSkip = true;  //跳过按钮
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {

    }

    startApp(){
        this.navCtrl.setRoot('LoginPage',{},{
            animate: true,
            direction: 'forward'
        })
    }

    onSlideChangeStart(slider){
        this.showSkip = !slider.isEnd();
    }

}
