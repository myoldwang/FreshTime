import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()   //懒加载
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
      this.menuCtrl.swipeEnable(false,'left');      //该页面禁用左侧菜单
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signup(){
      this.navCtrl.push('SignupPage');
  }

  login(username:HTMLInputElement,password:HTMLInputElement){
      /*let name = username.value;
      let psd = password.value;
      this.storage.set('username',name);
      this.storage.set('password',psd);*/
      this.navCtrl.setRoot('HomePage');
  }
}
