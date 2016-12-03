// 3. new关键字

function foo(a, b) {
    this.val = a + b;
}

var bar = foo.bind(null, 'p1');

var baz = new bar('p2');

console.log(baz.val); //p1p2

/*bind函数的第一个参数为null代表作用域不变，
后面的不定参数将会和函数本身的参数按次序进行绑定，
绑定之后执行函数只能从未绑定的参数开始传值。*/

