// 变量属性
var a = [];

a[0] = 1;

a['foobar'] = 2;

console.log(a.length); //1
console.log(a.foobar);	//2

// 当一个变量被声明后，扩充其属性并不会改变原数据类型。