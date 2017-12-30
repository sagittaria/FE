let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3 //带个length属性
}
 
let arr=Array.from(json);//方便直接转成array
console.log(arr)

arr =Array.of(3,4,5,6);
console.log(arr);

arr =Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr);

arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
})) // 6

arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('jspang',2,5); //从2开始，不含5
console.log(arr); // [0, 1, "jspang", "jspang", "jspang", 5, 6, 7, 8, 9]

for (let item of arr){
    console.log(item);
}

arr=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr.entries()){ // 同时取索引和值
    console.log(index+':'+val);
}

let list=arr.entries(); // 返回个迭代器，每个元素是长度为2的数组
console.log(list.next().value); // 如[0, "jspang"]
console.log(list.next().value);
console.log(list.next().value);

var add =(a,b=1) => a+b;
console.log(add(1));

add =(a,b=1) => {
    console.log('jspang')
    return a+b;
};
console.log(add(1));