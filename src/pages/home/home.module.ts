import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { StatusBar } from '@ionic-native/status-bar';
import { AppMinimize } from '@ionic-native/app-minimize';
import { ChartService } from './home.service';
import { ProgressComponentModule } from '../../components/progress/progress.module';
import { StepChartComponentModule } from '../../components/step-chart/step-chart.module';
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ProgressComponentModule,
    StepChartComponentModule,
  ],
  exports: [
    HomePage,
  ],
  providers:[
    StatusBar,
    AppMinimize,
    ChartService
  ]

})
export class HomePageModule {}
