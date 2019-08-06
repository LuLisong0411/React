class Person2 {
    constructor(name,age){
        console.log(3);
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('这是 Person2 中的say()方法');
    }
    static info = 123
}

var p3 = new Person2('XW',20);
console.log(p3)

// class Chinese {
//     constructor(color,language){
//         this.color = color;
//         this.language = language
//     }
// }
//实现 extends 继承 extends 前面是子类，后面是父类
class Chinese extends Person2{
    constructor(name,age,color,language){
        console.log(1);
        //当使用了 extends 关键字实现了继承，子类的 constructor 构造函数中必须显示调用super()方法，
        // 这个 super 表示父类中 constructor 的引用
        super(name,age)
        this.color = color;
        this.language = language
        console.log(2);
    }
}
var C1 = new Chinese('xl',20,'yellow','汉语');
console.log(C1);
//父类中的所有东西子类都能继承到
C1.say();
console.log(Chinese.info);
