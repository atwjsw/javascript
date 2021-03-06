//2. 用apply改变函数作用域

function foo(somthing) {
    console.log(this.a, somthing);
}

function bind(fn, obj) {
    return function() {
        return fn.apply(obj, arguments);
    };
}

var obj = { a: 2 };

var bar = bind(foo, obj);

var b = bar(3);	//2 3

console.log(b); //undefined


/*apply、call、bind都有个作用就是改变作用域，这里用apply将foo函数的作用域指向obj对象，同时传入参数。
再简单分析一下bind函数内部的嵌套，执行bind函数的时候返回的是一个匿名函数，所以执行bar(3)的时候实际上是执行的bind内部的匿名函数，
返回的是之前传入的foo函数的执行结果。
函数没有返回值的情况下默认返回undefined。*/
