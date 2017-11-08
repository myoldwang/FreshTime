import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetNeedleFourPage } from './set-needle-four';
import { RotateComponentModule } from '../../components/rotate/rotate.module';

@NgModule({
  declarations: [
    SetNeedleFourPage,
  ],
  imports: [
    IonicPageModule.forChild(SetNeedleFourPage),
    RotateComponentModule
  ],
})
export class SetNeedleFourPageModule {}
