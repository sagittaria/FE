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


{
    let [a,[b,c],d]=[1,[2,3],4];
}

{
    let [a,b="JSPang"]=['技术胖']
    console.log(a+b); //控制台显示“技术胖JSPang”
}

{
    let [a,b="JSPang"]=['技术胖',undefined];
    console.log(a+b); //控制台显示“技术胖JSPang”
}

{
    let [a,b="JSPang"]=['技术胖',null];
    console.log(a+b); //控制台显示“技术胖null”
}

{
    let {foo,bar} = {foo:'fuckup',bar:'beyondallrecognization'};
    console.log(foo+bar); 
}

{
    let foo;
    ({foo} ={foo:'JSPang'});//已经声明过的要加圆括号，否则编译不过
    console.log(foo); 
}

{
    const [a,b,c,d,e,f]="JSPang";
    console.log(a+"-");
    console.log(b+"-");
    console.log(c+"-");
    console.log(d+"-");
    console.log(e+"-");
    console.log(f+"-");
}