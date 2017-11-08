import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetNeedleThreePage } from './set-needle-three';
import { RotateComponentModule } from '../../components/rotate/rotate.module';

@NgModule({
  declarations: [
    SetNeedleThreePage,
  ],
  imports: [
    IonicPageModule.forChild(SetNeedleThreePage),
    RotateComponentModule
  ],
})
export class SetNeedleThreePageModule {}
