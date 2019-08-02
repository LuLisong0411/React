import React from 'react'
import ReactDom from 'react-dom'
//在 React 中，如果要创建DOM元素，只能用 React 提供的 JS API 来创建，不能 [直接] 像 vue 中那样，手写 html 元素
//React.createElement() 方法，用于创建虚拟 DOM 对象，它接收 3 个及以上的参数。
//参数 1 ：是个字符串类型的参数，表示要创建的元素类型。
//参数 2 ：是一个属性对象，表示创建的这个元素上有哪些属性。
//参数 3 ：从第三个参数的位置开始，后面可以放好多的虚拟 DOM 对象，这些参数表示当前元素的子节点。
//创建dom对象
// var H1 = React.createElement('h1',null,'这是一个H1');
// var Div = React.createElement('div',{title:'this is a div',id:'div'},'这是一个div',H1)
var title = "这是使用变量定义的值"
var arr = [];
for(var i = 0; i < 10; i++){ 
    var p = <p className="Div" key={i}>JSX 真好用</p>
    arr.push(p)
}

var Div = <div>
    这是使用了 JSX 语法创建的 Div。
    <p className="Div">JSX 真好用</p>
    <h1 title={ title + '，符合js代码的编译都是可以的' }>要清楚 JSX 的本质原理</h1>
    <label htmlFor=""></label>
    {arr}
</div>
//React.render('要渲染的虚拟 DOM 元素','要渲染到页面上的哪个位置中')
//***坑：ReactDom.render() 方法的第二个参数和 vue 不一样，不接收 "#app" 这样的字符串，而是需要传递一个原生的 DOM 对象。
 
ReactDom.render(Div,document.getElementById('app'))