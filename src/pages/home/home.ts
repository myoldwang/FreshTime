import { Component,} from '@angular/core';
import { IonicPage,Events,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import {AppMinimize} from "@ionic-native/app-minimize";
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    date: any;
    person_step_goal:number;
    person_sleep_goal:number;
    constructor(public events: Events,
                private storage: Storage,
                private statusBar: StatusBar,
                private appMinimize: AppMinimize,
                private platform: Platform,
    ) {
        this.date = new Date().getTime();
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#048FB6');
    }

    ionViewDidLoad(){
        this.person_step_goal = 10000;    //默认步数目标
        this.person_sleep_goal = 8;       //默认睡眠目标
    }
    ngAfterViewInit(){    //生命周期勾子（视图渲染完成）
        this.storage.get('person_step_goal').then((val)=>{
            this.person_step_goal = val
        })
        this.storage.get('person_sleep_goal').then((val)=>{
            this.person_sleep_goal = val;
        });
        this.platform.registerBackButtonAction(()=>{
            this.appMinimize.minimize();
        })
    }
}

//面包屑导航可以使用IonicPage插件
