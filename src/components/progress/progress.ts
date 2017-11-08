import { Component,ViewChild,ElementRef } from '@angular/core';

/**
 * Generated class for the ProgressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * 进度条组件
 */
@Component({
    selector: 'step-progress',
    templateUrl: 'progress.html'
})
export class ProgressComponent {
    @ViewChild('progress') progress_canvas:ElementRef;
    width: number;   //屏幕宽度
    height: number;  //canvas高度
    ctx: any;        //canvas  context对象
    canvas: any;     //canvas dom
    deg: number;     //进度条缓动角度
    animationFn: any;  //进度条动画对象
    constructor() {
        console.log('Hello ProgressComponent Component');
        this.width = document.body.clientWidth;
        this.height = 250;
        this.deg = 0;
    }
    ngAfterViewInit(){
        this.canvas = this.progress_canvas.nativeElement;
        this.canvas.width = this.width * window.devicePixelRatio;
        this.canvas.height = this.height * window.devicePixelRatio;
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio)
        this.drawslot();
    }
  //画进度槽
  drawslot(){
      this.ctx.beginPath();
      this.ctx.lineWidth = 8;
      this.ctx.lineCap = 'round';
      this.ctx.arc(this.width / 2, this.height / 2, this.height / 2 - 20, 0, 2 * Math.PI );
      this.ctx.strokeStyle = '#e9e9e9'
      this.ctx.stroke();
      this.ctx.closePath();
      this.drawAnimation();
  }

  //画进度条
  drawprogress(progress_x:number,progress_y:number){
      this.ctx.beginPath();
      this.ctx.lineWidth = 8;
      this.ctx.lineCap = 'round';
      this.ctx.arc(this.width / 2, this.height / 2, this.height / 2 - 20, progress_x * Math.PI / 180, (progress_y + 135) * Math.PI /180, false)
      this.ctx.strokeStyle = '#7ef51f';
      this.ctx.stroke();
      this.ctx.closePath();
  }

  //进度条动画
  drawAnimation(){
      this.deg = this.deg + 2;
      if(this.deg < 200){
          this.animationFn = requestAnimationFrame(this.drawAnimation.bind(this));
          this.drawprogress(90,this.deg);
      }
      else{
          cancelAnimationFrame(this.animationFn);
      }
  }
}
