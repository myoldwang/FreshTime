import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyfilePage } from './myfile';

@NgModule({
  declarations: [
    MyfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MyfilePage),
  ],
})
export class MyfilePageModule {}
