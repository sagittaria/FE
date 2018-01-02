// import {a} from './temp.js';
// console.log(a);

/*
编译后
//--------------------temp.js
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = exports.a = 'jspang';

//--------------------index.js
'use strict';

var _temp = require('./temp.js');

console.log(_temp.a);

// 360浏览器报：Uncaught ReferenceError: require is not defined
// 用node-cli是正常可以运行的

*/

import {a,b,c} from './temp.js';
import str from './temp.js';
console.log(a,b,c);
console.log(str);