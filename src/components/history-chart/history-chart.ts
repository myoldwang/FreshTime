import { Component,ViewChild,ElementRef,Input } from '@angular/core';
import { HistoryChartService } from './history-chart.service'
/**
 * Generated class for the HistoryChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'history-chart',
    templateUrl: 'history-chart.html'
})
export class HistoryChartComponent {
    @Input() type:string;
    @ViewChild('history_chart') history_chart_canvas: ElementRef;
    chart: any;
    chart_ctx: any;
    chart_height: number;
    width: number;
    height: number;
    step_data:any[]=[];
    step_scale:number;
    height_progress:number;
    request_id:any;
    bar_width:number;
    po_arr: any[] = [];
    step_all: number;
    weeks: any[] = [];
    months: any[] = [];
    years: any[] = [];
    constructor(public historyChart: HistoryChartService) {
        this.width = document.body.clientWidth;
        this.height = 250;
        this.chart_height = 200;
        this.height_progress = 0;
        this.weeks = ['周一','周二','周三','周四','周五','周六','周日'];
        this.months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一','十二'];
        this.years = ['2013','2014','2015','2016']
    }

    ngAfterViewInit(){
        if(this.type == 'weekday'){
            this.step_data = this.historyChart.get_today_step();
            this.bar_width = 30;
        }
        if(this.type == 'month'){
            this.step_data = this.historyChart.get_month_data();
            this.bar_width = 15;
        }
        if(this.type == 'year'){
            this.step_data = this.historyChart.get_year_data();
            this.bar_width = 25;
        }
        this.step_all = this.step_data.reduce((x,y)=>{return x + y});
        this.chart = this.history_chart_canvas.nativeElement;
        this.chart.width = 300 * window.devicePixelRatio;
        this.chart.height = 200 * window.devicePixelRatio;
        this.chart.style.width = 300 + 'px';
        this.chart.style.height = 200 + 'px';
        this.chart_ctx = this.chart.getContext('2d');
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
        this.pushPosition();
    }

    //画时间
    drawText(){
        if(this.type == 'weekday'){
            for(let i=0;i<7;i++){
              this.chart_ctx.fillText(this.weeks[i],i * 45,195);
            }
            this.chart_ctx.font = '16px Arial';
            this.chart_ctx.fillText('您本周共走了：'+ this.step_all + '步',60,20);

        }
        if(this.type == 'month'){
            for(let i=0;i<12;i++){
              this.chart_ctx.fillText(this.months[i],i * 25,195);
            }
            this.chart_ctx.font = '16px Arial';
            this.chart_ctx.fillText('您本月共走了：'+ this.step_all + '步',60,20);
        }
        if(this.type == 'year'){
            for(let i=0;i<4;i++){
              this.chart_ctx.fillText(this.years[i],i * 60,195);
            }
            this.chart_ctx.font = '16px Arial';
            this.chart_ctx.fillText('您今年共走了：'+ this.step_all + '步',60,20);
        }
    }

    //定义柱形的函数方法
    rect(x,y,width,height){
        this.chart_ctx.beginPath();
        this.chart_ctx.fillStyle = '#abcdef';
        this.chart_ctx.fillRect(x,y,width,height);
        this.chart_ctx.closePath();
    }

    //画周柱形
    draw_rect(){
        for(let i=0;i<this.step_data.length;i++){
            let height = this.step_data[i] / this.step_scale;
            let x = i * 45;
            this.rect(x,180,this.bar_width, - height * this.height_progress / 100);
        }
    }

    //画月柱形
    draw_month_reat(){
        for(let i=0;i<this.step_data.length;i++){
            let height = this.step_data[i] / this.step_scale;
            let x = i * 25;
            this.rect(x,180,this.bar_width,-height * this.height_progress / 100);
        }
    }

    //画年柱形
    draw_year_reat(){
        for(let i=0;i<this.step_data.length;i++){
            let height = this.step_data[i] / this.step_scale;
            let x = i * 60;
            this.rect(x,180,this.bar_width,-height * this.height_progress / 100);
        }
    }

    //柱形动画
    chartAnimation(){
        this.height_progress = this.height_progress + 2;
        if(this.height_progress < 100){
            this.request_id = requestAnimationFrame(this.chartAnimation.bind(this));
            if(this.type == 'weekday'){
                this.draw_rect();
            }
            if(this.type == 'month'){
                this.draw_month_reat();
            }
            if(this.type == 'year'){
                this.draw_year_reat();
            }
        }
        else{
            cancelAnimationFrame(this.request_id);
        }
    }



    //按压事件
    pressEvent(e){
        let position = this.getEventPosition(e);
        this.getInfo(position);
    }

    //柱状图坐标点
    pushPosition(){
        for(let i=0;i<this.step_data.length;i++){
            let height = this.step_data[i] / this.step_scale;
            let x;
            if(this.type == 'weekday'){
                x = i * 45;
            }
            if(this.type == 'month'){
                x = i * 25
            }
            if(this.type == 'year'){
                x = i * 60
            }
            //let x = i * 45;    //45为柱状图间隔
            let y = 180 - height;     //canvas高度为150，柱状图最高高度为130
            this.po_arr.push({x:x,y:y,width:this.bar_width,height:height})
        }
    }

    //点击坐标
    getEventPosition(e){
        let x,y;
        x = e.srcEvent.offsetX;
        y = e.srcEvent.offsetY;
        return {x : x,y : y};
    }

    //点击位置的判断
    getInfo(position){
        for(let i=0;i<this.po_arr.length;i++){
            if(position && (this.po_arr[i].x + this.po_arr[i].width) >= position.x && position.x >=this.po_arr[i].x &&
                (this.po_arr[i].y + this.po_arr[i].height) >= position.y && position.y >= this.po_arr[i].y){
                let tip = document.createElement('div');
                let text;
                if(this.type == 'weekday'){
                    text = document.createTextNode('您' + this.weeks[i] + '走了' + this.step_data[i] + '步');
                }
                if(this.type == 'month'){
                    text = document.createTextNode('您' + this.months[i] + '走了' + this.step_data[i] + '步');
                }
                if(this.type == 'year'){
                    text = document.createTextNode('您' + this.years[i] + '年走了' + this.step_data[i] + '步');
                }
                tip.appendChild(text);
                this.chart.parentNode.appendChild(tip);
                setTimeout(()=>{
                    this.chart.parentNode.removeChild(tip);
                },1000)
            }
        }
    }
}
