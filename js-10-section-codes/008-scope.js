// 作用域
foo(); //b nodejs, 在浏览器console中执行出错

var a = true;

if(a){
    function foo(){
        console.log('a');
    }
} else {
    function foo(){
        console.log('b');
    }
}



// javascript/并不是以代码段为作用域，而是以函数。
// 再根据命名提升的原则，所以这段代码应该是这样的：
/*function foo(){
    console.log('a');
}
function foo(){
    console.log('b');
}
foo();
var a = true;
if(a){
} else {
}*/