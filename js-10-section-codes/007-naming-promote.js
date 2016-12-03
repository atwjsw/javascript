// 命名提升
foo();

var foo = 0;

function foo(){
    console.log(1);
}

foo = function(){
    console.log(2);
};

//1


// 声明的变量和命名函数都会被提升到代码的最前面，只不过声明的变量的赋值语句在代码中的位置不变。所以上面这段代码应该被理解为：
/*var foo;
function foo(){
    console.log(1);
}
foo();
foo = 0;
foo = function(){
    console.log(2);
};*/
