
import { Injectable } from '@angular/core';

@Injectable()

export class ChartService{
    constructor(){

    }
    today_step = [1000,2000,500,2500,300,2700,1500,2400,2000,2500,1500,1000,2500,1500,1000,2500,1500,1000,2500,1500,1500,1000,2500,1500]
    get_today_step(){
        return this.today_step;
    }
}
