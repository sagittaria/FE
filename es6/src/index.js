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