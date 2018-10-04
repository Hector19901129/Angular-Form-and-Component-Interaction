/*
  filename: integralui.scrollbar.js
  version : 1.5.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,c){function a(){this.constructor=e}for(var b in c)c.hasOwnProperty(b)&&(e[b]=c[b]);e.prototype=null===c?Object.create(c):(a.prototype=c.prototype,new a)},__decorate=this&&this.__decorate||function(e,c,a,b){var f=arguments.length,d=3>f?c:null===b?b=Object.getOwnPropertyDescriptor(c,a):b,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,c,a,b);else for(var h=e.length-1;0<=h;h--)if(g=e[h])d=(3>f?g(d):3<f?g(c,a,d):
g(c,a))||d;return 3<f&&d&&Object.defineProperty(c,a,d),d},__metadata=this&&this.__metadata||function(e,c){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,c)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIScrollBar=function(e){function c(a,b,c){var d=e.call(this,c)||this;d.elemRef=a;d.elemRenderer=b;d.commonService=c;d.currentMaxValue=
0;d.currentMinValue=0;d.currentValue=0;d.currentSplitterDistance={x:0,y:0};d.emptySpace=0;d.maxPos={x:0,y:0};d.scrollPos={top:0,right:0,bottom:0,left:0};d.scrollSize={width:0,height:0};d.thumbSize={width:0,height:0};d.thumbPos={x:2,y:20};d.smallChange=0;d.largeChangeValue=0;d.orientation=integralui_core_1.IntegralUIOrientation.Vertical;d.scrollStart=new core_1.EventEmitter;d.scrollEnd=new core_1.EventEmitter;d.valueChanged=new core_1.EventEmitter;d.thumbStartPos={x:0,y:0};d.isThumbActive=!1;d.prevPos=
{x:0,y:0};d.scrollInterval=null;d.scrollTimeout=null;return d}__extends(c,e);Object.defineProperty(c.prototype,"height",{set:function(a){this.scrollSize.height!=a&&0<=a&&(this.scrollSize.height=a,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"largeChange",{set:function(a){this.largeChangeValue!=a&&0<=a&&(this.largeChangeValue=a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"max",{get:function(){return this.currentMaxValue},set:function(a){this.currentMaxValue!=
a&&(this.currentMaxValue=0>=a?1:a,this.currentValue>this.currentMaxValue&&(this.currentValue=this.currentMaxValue),this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"min",{get:function(){return this.currentMinValue},set:function(a){this.currentMinValue!=a&&0<=a&&(this.currentMinValue=a,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"position",{set:function(a){this.scrollPos=a?{top:this.commonService.isFieldAvailable(a.top,
0),right:this.commonService.isFieldAvailable(a.right,0),bottom:this.commonService.isFieldAvailable(a.bottom,0),left:this.commonService.isFieldAvailable(a.left,0)}:{top:0,right:0,bottom:0,left:0}},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"value",{get:function(){return this.currentValue},set:function(a){this.currentValue!=a&&(this.currentValue=a<this.currentMinValue?this.currentMinValue:a>this.currentMaxValue?this.currentMaxValue:a,this.updateLayout(),this.valueChanged.emit({value:this.currentValue}))},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"width",{set:function(a){this.scrollSize.width!=a&&0<=a&&(this.scrollSize.width=a,this.updateLayout())},enumerable:!0,configurable:!0});c.prototype.ngOnInit=function(){this.generalClassName="iui-scrollbar";this.initStyle()};c.prototype.ngAfterViewInit=function(){};c.prototype.ngAfterContentInit=function(){var a=this,b=setTimeout(function(){a.updateLayout();clearTimeout(b)},1)};c.prototype.ngOnDestroy=function(){this.clearScrolling()};
c.prototype.isVertical=function(){return this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?!0:!1};c.prototype.getSize=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};c.prototype.setScrollSize=function(a){this.scrollSize=a};c.prototype.updateLayout=function(){if(this.orientation==integralui_core_1.IntegralUIOrientation.Horizontal){0==this.largeChangeValue&&(this.largeChangeValue=this.scrollSize.width);
var a=this.scrollSize.width-2;var b=a/(this.currentMaxValue+this.largeChangeValue);b*=this.largeChangeValue;0>=this.currentMaxValue?b=a:7>b&&(b=7);this.thumbSize.width=b;this.emptySpace=a-b;0<this.currentMaxValue&&(this.thumbPos.x=2+this.currentValue*this.emptySpace/this.currentMaxValue)}else 0==this.largeChangeValue&&(this.largeChangeValue=this.scrollSize.height),a=this.scrollSize.height-2,b=a/(this.currentMaxValue+this.largeChangeValue),b*=this.largeChangeValue,0>=this.currentMaxValue?b=a:7>b&&
(b=7),this.thumbSize.height=b,this.emptySpace=a-b,0<this.currentMaxValue&&(this.thumbPos.y=2+this.currentValue*this.emptySpace/this.currentMaxValue)};c.prototype.thumbMouseDown=function(a){if(this.isEnabled){var b=this.commonService.getShiftPos();this.thumbStartPos={x:a.pageX-b.x,y:a.pageY-b.y};this.isThumbActive=!0;this.prevPos={x:this.value,y:this.value};this.scrollStart.emit({value:this.currentValue})}a.stopPropagation()};c.prototype.onWindowMouseMove=function(a){if(this.isEnabled&&1==a.buttons&&
this.isThumbActive){var b=this.commonService.getShiftPos(),c=a.pageX-b.x;a=a.pageY-b.y;b=0;this.orientation==integralui_core_1.IntegralUIOrientation.Horizontal?0<this.emptySpace&&(b=this.prevPos.x+(c-this.thumbStartPos.x)*this.currentMaxValue/this.emptySpace):0<this.emptySpace&&(b=this.prevPos.y+(a-this.thumbStartPos.y)*this.currentMaxValue/this.emptySpace);this.value=b}};c.prototype.onWindowMouseUp=function(a){this.isEnabled&&(this.isThumbActive=!1,this.prevPos.y=this.currentValue,this.clearScrolling(),
this.scrollEnd.emit({value:this.currentValue}))};c.prototype.changeScrollPos=function(a){if(this.isEnabled){var b=this;b.processLargeChange(a);b.clearScrolling();b.scrollTimeout=setTimeout(function(){b.scrollInterval=setInterval(function(){b.currentValue>b.currentMinValue&&b.currentValue<b.currentMaxValue?b.processLargeChange(a):b.clearScrolling()},100);clearTimeout(b.scrollTimeout)},250)}};c.prototype.processLargeChange=function(a){switch(this.isVertical()?a.offsetY<this.thumbPos.y?1:a.offsetY>this.thumbPos.y+
this.thumbSize.height?2:-1:a.offsetX<this.thumbPos.x?1:a.offsetX>this.thumbPos.x+this.thumbSize.width?2:-1){case 1:this.value-=this.largeChangeValue;break;case 2:this.value+=this.largeChangeValue}};c.prototype.clearScrolling=function(){this.scrollTimeout&&clearTimeout(this.scrollTimeout);this.scrollInterval&&clearInterval(this.scrollInterval);this.scrollInterval=this.scrollTimeout=null};c.prototype.getScrollBarStyle=function(){return this.orientation==integralui_core_1.IntegralUIOrientation.Horizontal?
{bottom:this.scrollPos.bottom+"px",left:0,width:this.scrollSize.width+"px"}:{top:this.scrollPos.top+"px",right:0,height:this.scrollSize.height+"px"}};return c}(integralui_core_1.IntegralUIBaseComponent);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIScrollBar.prototype,"height",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIScrollBar.prototype,"largeChange",null);
__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIScrollBar.prototype,"max",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIScrollBar.prototype,"min",null);__decorate([core_1.Input(),__metadata("design:type",Number)],IntegralUIScrollBar.prototype,"orientation",void 0);
__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],IntegralUIScrollBar.prototype,"position",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIScrollBar.prototype,"value",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIScrollBar.prototype,"width",null);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIScrollBar.prototype,"scrollStart",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIScrollBar.prototype,"scrollEnd",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIScrollBar.prototype,"valueChanged",void 0);
__decorate([core_1.HostListener("document:mousemove",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],IntegralUIScrollBar.prototype,"onWindowMouseMove",null);__decorate([core_1.HostListener("document:mouseup",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],IntegralUIScrollBar.prototype,"onWindowMouseUp",null);
IntegralUIScrollBar=__decorate([core_1.Component({selector:"iui-scrollbar",template:'\n\t\t<div *ngIf="isVertical()" class="iui-scrollbar-vertical" [ngStyle]="getScrollBarStyle()" (mousedown)="changeScrollPos($event)">\n\t\t\t<div class="iui-scroll-button-thumb-vertical" [ngStyle]="{ top: thumbPos.y + \'px\', height: thumbSize.height + \'px\' }" (mousedown)="thumbMouseDown($event)"></div>\n\t\t</div>\n\t\t<div *ngIf="!isVertical()" class="iui-scrollbar-horizontal" [ngStyle]="getScrollBarStyle()" (mousedown)="changeScrollPos($event)">\n\t\t\t<div class="iui-scroll-button-thumb-horizontal" [ngStyle]="{ left: thumbPos.x + \'px\', width: thumbSize.width + \'px\' }" (mousedown)="thumbMouseDown($event)"></div>\n\t\t</div>\n\t',
inputs:["controlStyle","data","enabled","name","state"],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService])],IntegralUIScrollBar);exports.IntegralUIScrollBar=IntegralUIScrollBar;