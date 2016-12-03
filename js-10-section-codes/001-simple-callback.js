// 使用this的简单回调

function foo() {
	console.log(this.a);
}

function doFoo(fn) {
	fn();
}

function doFoo2(o) {
	o.foo();
}

var obj = {
	a: 2,
	foo: foo
};

var a = 'I am an a';

doFoo(obj.foo);	//I am an a
doFoo2(obj); //2


/*分析
- 在Javascript中，this指向函数 执行时的当前对象，而非声明环境有。
- 执行doFoo的时候执行环境就是doFoo函数，执行环境为全局。
- 执行doFoo2时是在对象内部调用函数，this指针指向该对象。*/