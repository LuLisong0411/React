// console.log('ok')
//class 实现面向对象的新形势

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('我是方法构造函数')
}
Person.info = 123;
var P1 = new Person('zs',20);
console.log(P1);
console.log(P1.say());
console.log(Person.info)

//class 后面跟上类名，类名后面不需要加(), 直接上{}
class Person1 {
    //在每个class 类内部都有一个 constructor 构造器,如果没有显示定义构造器，那么类内部默认有一个看不见的 constructor
    // constructor的作用就好比之前的function Person(){ },每当使用new 关键字创建class类实例的时候，必然会优先调用 constructor 构造器
    //constructor (){}
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //实例方法必须通过 new 出来的对象调用
    say(){
        console.log('我是class类方法')
    }
    static info = 123;
    static sayHello(){
        console.log('这是静态方法');
    }
}
//静态方法挂载到构造器上，实例方法挂载到原型对象上。
var P2 = new Person1('mz',29);
console.log(P2);
console.log(P2.say());
console.log(Person1.info);
console.log(Person1.sayHello());