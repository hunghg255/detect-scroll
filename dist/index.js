(()=>{"use strict";var t={10:(t,i,s)=>{new class{constructor(t,{horizontal:i=!1,vertical:s=!0,events:e={}}={}){this.el=t||window,this.x=this.getX(),this.y=this.getY(),this.direction=null,this.isWindow=window===t,this.isScrolling=!1,this.isVertical=s,this.isHorizontal=i,this.rafId=null,this.rafTick=0,this.rafKilled=!1,this.teardown=this.teardown.bind(this),this.onScroll=this.onScroll.bind(this),this.events=e,this.setup(),this.watchX(),this.watchY()}setup(){this.el.addEventListener("scroll",this.onScroll,!1),this.setupScrollEvents()}setupScrollEvents(){Object.entries(this.events).forEach((t=>{const[i,s]=t;this.el.addEventListener(i,s,!1)}))}teardown(){this.el.removeEventListener("scroll",this.onScroll,!1),window.clearTimeout(this.timeout),window.cancelAnimationFrame(this.rafId),this.rafKilled=!0}teardownScrollEvents(){Object.entries(this.events).forEach((t=>{const[i,s]=t;this.el.removeEventListener(i,s,!1)}))}scrollTimeout(){this.timeout=setTimeout((()=>{this.onScrollEnd()}),120)}getY(){return this.isWindow?window.pageYOffset:this.el.scrollTop}getYMax(){let t=null;return t=this.isWindow?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):Math.max(this.el.scrollHeight,this.el.offsetHeight,this.el.clientHeight),t-window.innerHeight}isMaxY(){return this.getY()>=this.getYMax()}isMinY(){return this.getY()<=0}getX(){return this.isWindow?window.pageXOffset:this.el.scrollLeft}getXMax(){let t=null;return t=this.isWindow?Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth):Math.max(this.el.scrollWidth,this.el.offsetWidth,this.el.clientWidth),t-window.innerWidth}isMaxX(){return this.getX()>=this.getXMax()}isMinX(){return this.getX()<=0}watchX(){const t=this.getX(),i=t!==this.x,s=t<this.x,e=t>this.x,o=t!==this.x&&this.isMaxX(),l=t!==this.x&&this.isMinX();i&&this.onScrollStart(),s?this.dispatch("scrollLeft"):e&&this.dispatch("scrollRight"),o?this.dispatch("scrollMaxX"):l&&this.dispatch("scrollMinX"),this.x=t}watchY(){const t=this.getY(),i=t!==this.y,s=t<this.y,e=t>this.y,o=t!==this.y&&this.isMaxY(),l=t!==this.y&&this.isMinY();i&&this.onScrollStart(),e?this.dispatch("scrollDown"):s&&this.dispatch("scrollUp"),o?this.dispatch("scrollMaxY"):l&&this.dispatch("scrollMinY"),this.y=t}dispatch(t){this.direction!==t&&""+t in this.events&&(this.el.dispatchEvent(new CustomEvent(t)),this.direction=t,console.log(t))}onScroll(){this.rafKilled||(this.rafId=window.requestAnimationFrame((()=>{this.isHorizontal&&this.watchX(),this.isVertical&&this.watchY(),window.clearTimeout(this.timeout),this.scrollTimeout()})))}onScrollStart(){this.isScrolling||(this.dispatch("scrollStart"),this.isScrolling=!0)}onScrollEnd(){this.dispatch("scrollStop"),this.isScrolling=!1}}(window,{events:{scrollDown:()=>{console.log("down")},scrollUp:()=>{console.log("up")},scrollStop:()=>{console.log("stop")},scrollMinY:()=>{console.log("MinY")},scrollMaxY:()=>{console.log("MaxY")},scrollMinX:()=>{console.log("MinX")},scrollMaxX:()=>{console.log("MaxX")},scrollLeft:()=>{console.log("Left")},scrollRight:()=>{console.log("Right")}}})}},i={};function s(e){if(i[e])return i[e].exports;var o=i[e]={exports:{}};return t[e](o,o.exports,s),o.exports}s.d=(t,i)=>{for(var e in i)s.o(i,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})},s.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),s(10)})();