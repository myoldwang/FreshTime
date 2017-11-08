import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-alarm',
    templateUrl: 'alarm.html',
})
export class AlarmPage {
    items:any[]=[];
    weeks:any[]=[];
    has_alarm:boolean = false;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.weeks = ['周一','周二','周三','周四','周五','周六','周日',]
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad AlarmPage');
    }
    alarm_back_home(){
       /* this.navCtrl.setRoot('HomePage',{
            animate: true,
            animation: 'ios-transition',
            direction: 'back',
            duration: 500,
            easing:'ease-out'
        })*/
        this.navCtrl.pop();
    }
    add_alarm(){
        this.items.push(Date.now());
        this.has_alarm = true;
    }
    delete(item){
        if(this.items.length === 1){
            this.has_alarm = false;
        }
        for(var i=0;i<this.items.length;i++){
            if(this.items[i] == item){
                this.items.splice(i,1);
            }
        }

    }
    go_home(){
        this.navCtrl.setRoot('HomePage')
        //this.navCtrl.pop();
    }
}
