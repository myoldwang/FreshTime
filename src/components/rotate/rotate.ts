import { Component,ViewChild,ElementRef } from '@angular/core';

/**
 * Generated class for the RotateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'rotate',
    templateUrl: 'rotate.html'
})

export class RotateComponent {
    @ViewChild('rotate')  rotate_img:ElementRef;
    width:number;
    height:number;
    oImg: any;
    public rotate: any;
    arcX: number;     //圆心X
    preX:number;      //上一次鼠标坐标X
    preY:number;      //上一次鼠标坐标Y
    curX:number;      //当前鼠标坐标X
    curY:number;      //当前鼠标坐标Y
    preAngle:number;   //前一次触屏角度
    curAngle:number;
    transferAngle:number;

    constructor() {
        console.log('Hello RotateComponent Component');
        this.width = 276;
        this.height = 276;
    }
    ngAfterViewInit(){
        this.oImg = this.rotate_img.nativeElement;
        this.arcX = 138;
    }
    touch_start(e:TouchEvent){
        this.preX = e.touches[0].pageX;
        this.preY = e.touches[0].pageY;
        this.preAngle = Math.atan2(this.preY - this.arcX - 250,this.preX - this.arcX - 50);
    }
    touch_move(e:TouchEvent){
        this.curX = e.touches[0].pageX;
        this.curY = e.touches[0].pageY;
        this.curAngle = Math.atan2(this.curY - this.arcX - 250,this.curX - this.arcX - 50);
        this.transferAngle = (this.curAngle - this.preAngle) * 180 / Math.PI;
        this.oImg.style.transform = 'rotate(' + (this.transferAngle) + 'deg)';
    }
}
