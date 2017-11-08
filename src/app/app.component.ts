import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav,Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { routeOptions } from '../pages/pages';
import {FirstRunPage, NewHome} from '../pages/pages'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    //rootPage:any;
    // make TutorialPage the root (or first) page
    first_in: boolean = true;
    rootPage: any;
    options:NativeTransitionOptions = routeOptions;
    pages: Array<{title: string, component: any,start_icon: string,end_icon: string,description: any}>;
    name:any;
    constructor(
        public platform: Platform,   //平台
        public menu: MenuController,   //菜单控制
        public splashScreen: SplashScreen,   //闪屏处理
        public events: Events,
        private nativePageTransitions: NativePageTransitions,
    ) {
        this.initializeApp();
        this.create_name();     //创建用户名称
      // set our app's pages
        this.pages = [
            { title: '完善我的资料', component: 'MyfilePage', description: '', start_icon:'ios-man-outline', end_icon: 'arrow-forward'},
            { title: '设备腕表指针', component: 'SetNeedleOnePage',description: '',start_icon: 'ios-cog-outline',end_icon: 'arrow-forward' },
            { title: '闹钟', component: 'AlarmPage',description: '',start_icon: 'ios-alarm-outline',end_icon: 'arrow-forward' },
            { title: '历史记录', component: 'HistoryPage', description: '',start_icon: 'ios-podium-outline',end_icon: 'arrow-forward'},
            { title: '本地功能', component: 'CallPage', description: '',start_icon: 'ios-call-outline',end_icon: 'arrow-forward'},
            { title: '固件升级', component: 'UpdatePage',description: '',start_icon: 'ios-cloud-download-outline',end_icon: 'arrow-forward'}
        ];
        if(this.first_in = true){
            this.rootPage = FirstRunPage;
        }
        else{
            this.rootPage = NewHome;
        }

      //通过key,判断曾经是否进入过引导页
     /* this.storage.get('firstIn').then((result)=>{
          console.log('firstIn is',result);
          result = false;
          if(result){
              this.rootPage = 'LoginPage';
          }
          else{
              this.storage.set('firstIn',true);
              this.rootPage = FirstRunPage;
          }
      })
*/
    }

    //订阅在个人资料页创建的用户名
    create_name(){
        this.events.subscribe('user:speak',(user)=>{
            this.name = user;
        })
    }


    initializeApp() {
        this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.splashScreen.hide();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page    刷新之后在当前页面，方便调试
        this.nativePageTransitions.fade(this.options);
        //this.nav.setRoot(page.component);
        this.menu.close()
        this.nav.push(page.component);
        //this.navCtrl.push(page.component);
    }
}
