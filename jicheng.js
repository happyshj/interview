function Fun() {
    // 私有属性
    var val = 1;
    var arr = [1];
    function fun() {

    } // 私有函数

    // 实例属性
    this.val = 1; // 实例基本属性
    this.arr = [1]; // 实例引用属性
    this.fun = function () {

    }; // 实例函数
}

// 原型属性
Fun.prototype.val = 1; // 原型基本属性
Fun.prototype.arr = [1]; // 原型引用属性
Fun.prototype.fun = function () {

}; // 原型函数

// 1、简单原型链继承
// function Super() {
//     this.val = 1;
//     this.arr = [1];
// }
// function Sub() {
//
// }
// Sub.prototype = new Super(); // 核心，使用父类实例充当子类原型对象
//
// var sub1 = new Sub();
// var sub2 = new Sub();
// sub1.val = 2;
// sub1.arr.push(2);
//
// console.log(sub1.val); // 2
// console.log(sub2.val); // 1
//
// console.log(sub1.arr); // 1,2
// console.log(sub2.arr); // 1, 2

// 2、使用构造函数继承
function Super(val) {
    this.val = val;
    this.arr = [1];
    this.fun = function () {

    }
}
function Sub(val) {
    Super.call(this, val);
}

var sub1 = new Sub(1);
var sub2 = new Sub(2);
sub1.arr.push(2);

console.log(sub1.val); // 1
console.log(sub2.val); // 2

console.log(sub1.arr); // 1,2
console.log(sub2.arr); // 1

console.log(sub1.fun === sub2.fun); // false

// 优点：解决了实例共享父类引用属性的问题；创建子类实例时，可以向父类构造函数传参
// 缺点：无法实现函数复用
