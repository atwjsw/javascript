// 伪闭包
function foo(){
    console.log(a);
}
function bar () {
    var a = 3;
    foo();
}
var a = 2;
bar(); //2

// 闭包是函数的嵌套定义，而不是函数的嵌套调用。
