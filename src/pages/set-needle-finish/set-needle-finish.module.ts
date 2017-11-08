import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetNeedleFinishPage } from './set-needle-finish';
import { RotateComponentModule } from '../../components/rotate/rotate.module';

@NgModule({
  declarations: [
    SetNeedleFinishPage,
  ],
  imports: [
    IonicPageModule.forChild(SetNeedleFinishPage),
    RotateComponentModule
  ],
})
export class SetNeedleFinishPageModule {}
