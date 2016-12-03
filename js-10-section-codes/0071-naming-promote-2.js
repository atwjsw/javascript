foo();
var foo = 0;

function foo() {
    console.log(1);
}
//foo();
foo = function() {
    console.log(2);
};
foo();
