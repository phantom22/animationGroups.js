class Controller{constructor(...a){Array.isArray(a)&&1<=a.length&&a.forEach(a=>{const b=document.querySelectorAll(a);if(1<=b.length){let a={};for(let c=0;c<b.length;c++){const d=getComputedStyle(b[c]);a[c]={element:b[c],style:{width:+d.width.replace("px","")},values:{verse:0,onpause:!1}}}this.elements=a}})}}class stretchAnimation extends Controller{constructor(...a){Array.isArray(a)&&1<=a.length&&super(a)}setProperties(a={sWidth:d,fWidth:e,stretchSpeed:f,initialDelay:g,rest:h}){const b=Object.keys(this.elements).length,c=a=>Array.isArray(a)&&a.length===b,{sWidth:d,fWidth:e,stretchSpeed:f,initialDelay:g,rest:h}=a;if(c(d)&&c(e)&&c(f)&&c(g)&&c(h)){const b=Object.keys(a);for(let c=0;c<b.length;c++){const d=b[c];for(let b=0;b<a[d].length;b++)"sWidth"===d?(this.elements[b].values.starting={width:a[d][b]},this.elements[b].style.width=a[d][b]):"fWidth"===d?this.elements[b].values.final={width:a[d][b]}:"initialDelay"===d?(this.elements[b].values[d]=a[d][b],this.elements[b].values.onpause=!!(0<a[d][b])):this.elements[b].values[d]=a[d][b]}}}HTMLUpdate(){const a=Object.keys(this.elements).length;for(let b=0;b<a;b++)this.elements[b].element.style.width=`${this.elements[b].style.width}%`,this.elements[b].element.style.height=`${this.elements[b].style.height}px`}calculateObjectsWidth(){if("undefined"!=typeof this.animation)for(let a=0;a<Object.keys(this.elements).length;a++)if(!1===this.elements[a].values.onpause){let b=this.elements[a].values.verse,c=this.elements[a].style.width;const d=0===b?this.elements[a].values.stretchSpeed:-this.elements[a].values.stretchSpeed,e=this.elements[a].values.final.width,f=this.elements[a].values.starting.width,g=this.animation.fps;c+=d/g,c=c<f?f:c,c=c>e?e:c,this.elements[a].style.width=c,0===b&&c>=e?(this.elements[a].values.verse=1,this.rest(a)):1===b&&c<=f&&(this.elements[a].values.verse=0,this.rest(a))}}initialDelays(){if("undefined"!=typeof this.animation){const a=Object.keys(this.elements).length;for(let b=0;b<a;b++)!0===this.elements[b].values.onpause&&0<this.elements[b].values.initialDelay&&setTimeout(function(a,b){a.elements[b].values.onpause=!1},this.elements[b].values.initialDelay,this,b);this.animation.initialDelays=!0}}startLoop(a){"number"==typeof a&&1<=a&&(this.animation={onpause:!1,fps:a,initialDelays:!1},this.animation.display=setInterval(function(a){!1===a.animation.initialDelays&&a.initialDelays(),!1===a.animation.onpause&&(a.HTMLUpdate(),a.calculateObjectsWidth())},1e3/a,this))}pause(){"undefined"!=typeof this.animation&&(this.animation.onpause=!(!1!==this.animation.onpause))}reset(){"undefined"!=typeof this.animation&&(clearInterval(this.animation.display),delete this.animation)}rest(a){"undefined"!=typeof this.elements[a]&&(this.elements[a].values.onpause=!0,setTimeout(function(a,b){a.elements[b].values.onpause=!1},this.elements[a].values.rest,this,a))}}