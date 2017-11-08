import { Injectable } from '@angular/core';

@Injectable()

export class HistoryChartService{
    constructor(){

    }
    today_step = [7000,9000,1250,5500,2000,7500,6500];
    month_data = [117000,109000,146500,155500,138000,127500,176500,127500,176500,117000,109000,130046];
    year_data =  [744000,911000,614500,554100];
    get_today_step(){
        return this.today_step;
    }
    get_month_data(){
        return this.month_data;
    }
    get_year_data(){
        return this.year_data;
    }
}
