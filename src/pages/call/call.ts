import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { routeOptions } from '../pages';
import { Vibration } from '@ionic-native/vibration';
import { Badge } from '@ionic-native/badge';
declare var window;
/**
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {
    img_src: any;
    options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }
    routeOptions:NativeTransitionOptions = routeOptions;
    constructor(public navCtrl: NavController,
                private contacts: Contacts,
                private camera: Camera,
                private nativePageTransitions: NativePageTransitions,
                private vibration: Vibration,
                private badge: Badge,
    ) {
    }

    callup(){
        this.contacts.pickContact().then((contact)=>{
            alert(JSON.stringify(contact));
        })
    }
    call_back_home(){
        this.nativePageTransitions.slide(this.routeOptions);
        this.navCtrl.pop();
        //this.navCtrl.setRoot('HomePage');
    }
      initJPush() {
      //启动极光推送
          if (window.plugins && 　window.plugins.jPushPlugin) {
              window.plugins.jPushPlugin.init();
          }
      }

    call_camera(){
        this.camera.getPicture().then((imageData)=>{
            this.img_src = imageData;
        },(err)=>{
            alert(err);
        })
    }

    call_vibration(){
        this.vibration.vibrate(1000);
    }

    call_badge(){
        this.badge.set(2);
    }

    clear_badge(){
        this.badge.clear();
    }
}
