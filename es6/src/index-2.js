// let setArr = new Set(['jspang','技术胖','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}

// setArr.add('前端职场');
// console.log(setArr);

// setArr.delete('前端职场');
// console.log(setArr); //Set {"jspang", "技术胖", "web"}

// console.log(setArr.has('jspang'));//true

// setArr.clear(); 
// console.log(setArr);//Set {}

// setArr = new Set(['jspang','技术胖','web','jspang']);
// for (let item of setArr){
//     console.log(item);
// }

// console.log(setArr.size);
// setArr.forEach((value)=>console.log(value));


// let weakObj=new WeakSet(); //不能在构造时传值
// let obj={a:'jspang',b:'技术胖'}
// let obj1=obj;
 
// weakObj.add(obj);
// //weakObj.add(obj1); //同不能有重复
 
// console.log(weakObj);

// let json = {
//     name:'jspang',
//     skill:'web'
// }
// console.log(json.name);

// var map=new Map();
// //map.set(json,'iam');
// map.set('jspang',json);
// console.log(map);
// //console.log(map.get(json));
// // map.delete('jspang');
// // console.log(map);
// console.log(map.size);

// console.log(map.has('jspang'))
    
// map.clear()
// console.log(map);

// var pro = new Proxy({
//     add: function (val) {
//             return val + 10;
//          },
//     name: 'I am Jspang'
//     }, {
//         get:function(target,key,property){
//             console.log('come in Get');
//             return target[key];
//         },
//         set:function(target,key,value,receiver){
//             console.log(`setting ${key} = ${value}`);
//             return target[key] = value;
//         }
//     });
 
// //console.log(pro.name); // target=pro, key=name
// // 因为调属性就是执行属性的get方法
// pro.name='hash';
// //console.log(pro.name);

//---------------------------------------------------------
// let target = function () {
//     return 'I am JSPang';
// };
// var handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// var pro = new Proxy(target, handler);
// console.log(pro()); 
// 没看懂这是在做什么---------------------------------------

// let state=1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// } 
// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//     if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }
// new Promise(step1)
//     .then(function(val){
//         console.log(val);
//         return new Promise(step2);
//     })
//     .then(function(val){
//         console.log(val);
//         return new Promise(step3);
//     })
//     .then(function(val){
//         console.log(val);
//         return val;
//     });

// class Coder{
//     name(val){
//         console.log(val);
//     }
// }
 
// let jspang= new Coder;
// jspang.name('jspang');

// class Coder{
//     name(val){
//         console.log(val);
//         return val;
//     }  // <----------这里不要加逗号了
//     skill(val){
//         console.log(this.name('jspang')+':'+'Skill:'+val);
//     }
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     } 
//     add(){
//         return this.a+this.b;
//     }
// }
 
// let jspang= new Coder;
// jspang.name('jspang');
// jspang.skill('web');
// let jspang2=new Coder(1,2);
// console.log(jspang2.add());

// class htmler extends Coder{}
// let pang=new htmler;
// pang.name('技术胖');