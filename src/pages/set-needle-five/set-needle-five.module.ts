import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetNeedleFivePage } from './set-needle-five';
import { RotateComponentModule } from '../../components/rotate/rotate.module';

@NgModule({
  declarations: [
    SetNeedleFivePage,
  ],
  imports: [
    IonicPageModule.forChild(SetNeedleFivePage),
    RotateComponentModule
  ],
})
export class SetNeedleFivePageModule {}
