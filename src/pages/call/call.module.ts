import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallPage } from './call';
import { Contacts } from '@ionic-native/contacts';
import { Camera } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';
import { Badge } from '@ionic-native/badge';

@NgModule({
  declarations: [
    CallPage,
  ],
  imports: [
    IonicPageModule.forChild(CallPage),
  ],
  providers:[
    Contacts,
    Camera,
    Vibration,
    Badge,
  ]
})
export class CallPageModule {}
