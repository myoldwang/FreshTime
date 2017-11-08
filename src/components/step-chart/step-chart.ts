import { Component,ViewChild,ElementRef } from '@angular/core';
import { ChartService } from '../../pages/home/home.service';

/**
 * Generated class for the StepChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * 计步睡眠组件
 */
@Component({
  selector: 'step-chart',
  templateUrl: 'step-chart.html'
})
export class StepChartComponent {

    @ViewChild('chart') stepChart_canvas: ElementRef;
    width: number;   //屏幕宽度
    height: number;  //canvas高度
    step_data: any[] = [];    //步数数据
    chart: any;    //图表dom
    step_scale: number;     //最大步数
    chart_ctx: any;
    chart_height: number;    //图表高度
    bar_width: number;       //柱形宽度
    height_progress: number;   //作为百分比画缓动动画
    request_id: any;
    constructor(public chartService: ChartService) {
        this.width = document.body.clientWidth;
        this.height = 250;
        this.chart_height = 150;
        this.bar_width = 10;
        this.height_progress = 0;
    }
    ngAfterViewInit(){
        this.step_data = this.chartService.get_today_step();    //步数数据
        this.chart = this.stepChart_canvas.nativeElement;
        this.chart.width = this.width * window.devicePixelRatio;
        this.chart.height = this.chart_height * window.devicePixelRatio;
        this.chart.style.width = this.width + 'px';
        this.chart.style.height = this.chart_height + 'px';
        this.chart_ctx = this.chart.getContext('2d');     //图表ctx对象
        this.chart_ctx.scale(window.devicePixelRatio,window.devicePixelRatio);
        this.step_scale = Math.max.apply(null,this.step_data) / 120;
        this.line(0,this.chart_height-20,this.width,this.chart_height-20);
    }

    //画线
    line(aX,aY,bX,bY){
        this.chart_ctx.save();
        this.chart_ctx.translate(.5,.5);
        this.chart_ctx.lineWidth = 1;
        this.chart_ctx.beginPath();
        this.chart_ctx.strokeStyle = '#c1c6cc';
        this.chart_ctx.moveTo(aX,aY);
        this.chart_ctx.lineTo(bX,bY);
        this.chart_ctx.stroke();
        this.chart_ctx.restore();
        this.chartAnimation();
        this.drawText();
    }

    //定义柱形的函数方法
    rect(x,y,width,height){
        this.chart_ctx.beginPath();
        this.chart_ctx.fillStyle = '#abcdef';
        this.chart_ctx.fillRect(x,y,width,height);
        this.chart_ctx.closePath();
    }

    //画柱形
    draw_rect(){
        for(let i=0;i<this.step_data.length;i++){
            let height = this.step_data[i] / this.step_scale;
            let x = i * 15;
            this.rect(x,130,this.bar_width,-height * this.height_progress / 100);
        }
    }

    //柱形动画
    chartAnimation(){
        this.height_progress = this.height_progress + 2;
        if(this.height_progress < 100){
            this.request_id = requestAnimationFrame(this.chartAnimation.bind(this));
            this.draw_rect();
        }
        else{
            cancelAnimationFrame(this.request_id);
        }
    }

    //画时间
    drawText(){
        for(let i=1;i<7;i++){
            this.chart_ctx.fillText(4 * i + ':00',i * 50,150)
        }
    }

}
