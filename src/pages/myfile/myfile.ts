import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-myfile',
    templateUrl: 'myfile.html',
})
export class MyfilePage {
    age: any[]=[];
    person_height:number;       //身高
    person_weight:number;       //体重
    person_step_goal:number;     //步数目标
    person_sleep_goal:number;    //睡眠目标
    constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,private storage: Storage) {
        this.person_height = 100;
        this.person_weight = 20;
        this.person_step_goal = 10000;
        this.person_sleep_goal = 8;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyfilePage');
        for(let i=10;i<60;i++){
            this.age.push(i);
        }
    }
    toHomePage(username:HTMLInputElement){
        this.events.publish('user:speak',username.value);
        this.storage.set('person_step_goal',this.person_step_goal);
        this.storage.set('person_sleep_goal',this.person_sleep_goal);
        this.navCtrl.setRoot('HomePage');
    }

}
