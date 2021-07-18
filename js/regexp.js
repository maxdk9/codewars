"use strict";
let str='+38(050)655-39-11';
let regexp=/\d/g;
const resarray=str.match(regexp);
console.log(resarray.join(''));


String.prototype.digit = function() {
    
    let arg=this.valueOf();
    let regexp=/\d/g;
    return arg.match(regexp).join('').length==arg.length;
  };

  console.log('12'.digit());
  console.log('123413xvfgds'.digit());
  console.log('12313'.digit());