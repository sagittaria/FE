// let  json = {
//     '0': 'jspang',
//     '1': '技术胖',
//     '2': '大胖逼逼叨',
//     length:3 //带个length属性
// }
 
// let arr=Array.from(json);//方便直接转成array
// console.log(arr)

// arr =Array.of(3,4,5,6);
// console.log(arr);

// arr =Array.of('技术胖','jspang','大胖逼逼叨');
// console.log(arr);

// arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// })) // 6

// arr=[0,1,2,3,4,5,6,7,8,9];
// arr.fill('jspang',2,5); //从2开始，不含5
// console.log(arr); // [0, 1, "jspang", "jspang", "jspang", 5, 6, 7, 8, 9]

// for (let item of arr){
//     console.log(item);
// }

// arr=['jspang','技术胖','大胖逼逼叨']
// for (let [index,val] of arr.entries()){ // 同时取索引和值
//     console.log(index+':'+val);
// }

// let list=arr.entries(); // 返回个迭代器，每个元素是长度为2的数组
// console.log(list.next().value); // 如[0, "jspang"]
// console.log(list.next().value);
// console.log(list.next().value);

// var add =(a,b=1) => a+b;
// console.log(add(1));

// add =(a,b=1) => {
//     console.log('jspang')
//     return a+b;
// };
// console.log(add(1));

// let json = {
//     a:'jspang',
//     b:'技术胖'
// }
// function fun({a,b='jspang'}){
//     console.log(a,b);
// }
// fun(json); //jspang 技术胖

// let arr = ['jspang','技术胖','免费教程'];
// function func(a,b,c){
//     console.log(a,b,c);
// }//复习之前的数组解构 
// func(...arr); //jspang 技术胖 免费教程

// let obj={
//     a:'jspang',
//     b:'技术胖'
// }
// console.log('a' in obj);  //true 字符'a'存在与“值”中

// arr=[,,,,,];
// console.log(arr.length); //5
// console.log(0 in arr); //false 
// let arr1=['jspang','技术胖'];
// console.log(0 in arr1);  // true
// //0表示第0个索引位置

// arr = ['jspang','技术胖', ,'免费教程'];//会自动跳过为空的元素
// arr.forEach((val,index)=>console.log(index,val));
// // 0 "jspang"
// // 1 "技术胖"
// // 3 "免费教程"

// arr=['jspang','技术胖','前端教程'];
// console.log(arr.join('|'));
// arr=['jspang','技术胖','前端教程'];
// console.log(arr.toString());

// let name="jspang";
// let skill= 'web';
// var obj= {name,skill};
// console.log(obj); //直接给对象赋属性和值

// let key='skill';
// var obj={
//     [key]:'web'
// }//对象的构建，给obj加了个名为skill的key
// console.log(obj.skill); //打印出 web

// obj={
//     add:function(a,b){
//         return a+b;
//     }
// }//定义对象的方法
// console.log(obj.add(1,2));  //3

// var obj1 = {name:'jspang'};
// var obj2 = {name:'jspang'};
// console.log(obj1.name === obj2.name);//true
// console.log(Object.is(obj1.name,obj2.name)); //true
// console.log(+0 === -0);  //true
// console.log(NaN === NaN ); //false
// console.log(Object.is(+0,-0)); //false
// console.log(Object.is(NaN,NaN)); //true

// var a={a:'jspang'};
// var b={b:'技术胖'};
// var c={c:'web'}; 
// let d=Object.assign(a,b,c) //对象合并
// console.log(d); // Object {a: "jspang", b: "技术胖", c: "web"}

// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object; 
// var f= Symbol();
// console.log(typeof d);

// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());

// var jspang = Symbol();
// var obj={
//     [jspang]:'技术胖'
// }
// console.log(obj[jspang]);
// obj[jspang]='web';
// console.log(obj[jspang]);

var obj={name:'jspang',skill:'web',age:18};
for (let item in obj){
    console.log(obj[item]);
}

let obj2={name:'jspang',skill:'web'};
let age=Symbol();
obj2[age]=18;
for (let item in obj2){ //循环中age不会登场
    console.log(obj2[item]);
} 
console.log(obj2);