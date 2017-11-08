import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { HistoryChartComponentModule } from '../../components/history-chart/history-chart.module'

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
    HistoryChartComponentModule
  ],
})
export class HistoryPageModule {}
