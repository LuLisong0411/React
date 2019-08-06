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
// var title = "这是使用变量定义的值"
// var arr = [];
// for(var i = 0; i < 10; i++){ 
//     var p = <p className="Div" key={i}>JSX 真好用</p>
//     arr.push(p)
// }

// var Div = <div>
//     这是使用了 JSX 语法创建的 Div。
//     <p className="Div">JSX 真好用</p>
//     <h1 title={ title + '，符合js代码的编译都是可以的' }>要清楚 JSX 的本质原理</h1>
//     <label htmlFor=""></label>
//     {arr}
// </div>
//React.render('要渲染的虚拟 DOM 元素','要渲染到页面上的哪个位置中')
//***坑：ReactDom.render() 方法的第二个参数和 vue 不一样，不接收 "#app" 这样的字符串，而是需要传递一个原生的 DOM 对象。
//在 React 中，构造函数就是一个最基本的组件。 
// 如果想把组件放到页面中，可以把构造函数的名称当作组件的名称，以 html 的形式引入页面即可
//***坑：React 在解析所有的标签的时候是以标签的首字母来区分的。
// 如果标签的首字母是小写，那么按照普通的 html 标签来解析；如果首字母是大写则按照组件的形式去解析。
//组件的首字母必须大写
// var name = 'zs'
// var age = 18
var obj = {
    name: 'ls',
    age : 20,
    addr: '北京'
}
// function Hello(props){
//     return <div>
//         <h1>这是Hello组件中定义的元素</h1>
//         <p>{obj.name}--{obj.age}--{obj.addr}</p>
//         <p>{props.name}--{props.age}--{props.addr}</p>
//     </div>
// }
import Hello from './common/Hello.js'
import HelloJSX from './common/HelloJSX.jsx'
import classTest from './class_test.js'
import classExtends from './class_extends'
// ReactDom.render(Div,document.getElementById('app'))
ReactDom.render(<div>
    {/* <Hello name={obj.name} age={obj.age} addr={obj.addr}></Hello> */}
    <Hello {...obj}></Hello>
    <HelloJSX {...obj}></HelloJSX>
</div>,document.getElementById('app'))