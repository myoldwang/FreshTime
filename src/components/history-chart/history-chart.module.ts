import { NgModule } from '@angular/core';
import { HistoryChartComponent } from './history-chart';
import { HistoryChartService } from './history-chart.service'

@NgModule({
    declarations: [HistoryChartComponent
    ],
    imports: [],
    exports: [HistoryChartComponent
    ],
    providers: [
      HistoryChartService,
    ]
})
export class HistoryChartComponentModule {}
