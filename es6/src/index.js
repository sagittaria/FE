// var j="JSPang";
// window.onload= function(){
//     console.log(j);
// }

// let f=1;
// console.log(f);

// var a=2;
// {
//    var a=3;
// }
// console.log(a); //3

// var b=2;
// {
//    let b=3;
// }
// console.log(b); //2

// {
//    let c=3;
// }
// console.log(c); //undefined


// {
//     let [a,[b,c],d]=[1,[2,3],4];
// }

// {
//     let [a,b="JSPang"]=['技术胖']
//     console.log(a+b); //控制台显示“技术胖JSPang”
// }

// {
//     let [a,b="JSPang"]=['技术胖',undefined];
//     console.log(a+b); //控制台显示“技术胖JSPang”
// }

// {
//     let [a,b="JSPang"]=['技术胖',null];
//     console.log(a+b); //控制台显示“技术胖null”
// }

// {
//     let {foo,bar} = {foo:'fuckup',bar:'beyondallrecognization'};
//     console.log(foo+bar); 
// }

// {
//     let foo;
//     ({foo} ={foo:'JSPang'});//已经声明过的要加圆括号，否则编译不过
//     console.log(foo); 
// }

// {
//     const [a,b,c,d,e,f]="JSPang";
//     console.log(a+"-");
//     console.log(b+"-");
//     console.log(c+"-");
//     console.log(d+"-");
//     console.log(e+"-");
//     console.log(f+"-");
// }

// function jspang(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
 
// }
// jspang(1,2,3);

// let arr1=['www','jspang','com'];
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('shengHongYu');
// console.log(arr2);
// console.log(arr1);//1没变，2变了

// function jspang(first,...arg){
//     console.log(arg.length);
// }
// jspang(0,1,2,3,4,5,6,7);//7

// function jspang(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// jspang(0,1,2,3,4,5,6,7);// 1~7

// let jspang='技术胖';
// let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
// document.write(blog); //字符串模板用的是 ` 而非单引号
// document.write(blog.includes(jspang));//返回true
// blog.startsWith(jspang);//判断开始
// blog.endsWith(jspang);//和结尾

// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(result);//支持运算

// document.write('jspang|'.repeat(3));//复制

// let binary = 0B010101;
// console.log(binary);


let a= 11/4;//验证是不是数字
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false

console.log(Number.isNaN(NaN)); //true，NaN不是数字
console.log(Number.isInteger(a)); //false，不是整数