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
//使用构造函数的方式和 class 关键字创建组件有着本质上的区别：
//使用 function 构造函数创建的组件，内部没有 state 私有数据，只有一个 props 来接收外界传递过来的数据；
// 使用 class 关键字创建的组件，内部除了有 this.props 这个只读属性外，
// 还有一个专门用于存放自己私有数据的 this.state 属性，这个私有属性是可读可写的。
// 基于上面的区别：我们可以为这两种创建组件的方式下定义。1、使用 function 创建的组件叫做【无状态组件；】
// 2、使用 class 关键字创建的组件叫做【有状态组件】
// 有状态组件和无状态组件最本质的区别：就是有无 state 属性；同时 class 创建的组件有自己的生命周期函数。
// function 创建的组件没有自己的生命周期函数。
//什么时候使用两种组件呢？
//1、如果一个组件需要存放自己私有数据，或者需要在组件的不同阶段执行不同的业务逻辑，此时非常适合用 class 创建出来的有状态组件；
//2、如果一个组件只需要根据外界传递过来的 props 渲染固定的页面结构，此时非常适合用 function 创建出来的无状态组件；
//3、使用无状态组件有一点小好处：由于剔除了生命周期，所以运行速度会相对快一点。
import Hello from './common/Hello.js'
import Hello2 from './common/Hello2.jsx'
import HelloJSX from './common/HelloJSX.jsx'
import classTest from './class_test.js'
import classExtends from './class_extends.js'
// ReactDom.render(Div,document.getElementById('app'))
// class Hello2 extends React.Component{
//     constructor(props){
//         // 如果使用了 extends 实现了继承，那么在 constructor 的第一行一定要显示调用一下 super() ;super() 表示父类的构造函数。
//         super(props);
//         //在 constructor 中，如果想要访问 props 属性，不能直接使用 this.props 而是需要在 constructor 的构造器
//         // 参数列表中显示定义 props 属性来接收，才能正常访问。
//         // console.log(this.props);            //undefined
//         console.log(props);
//     }
//     //No `render` method found on the returned component instance: you may have forgotten to define `render`
//     //通过分析以上报错，发现提示我们在 class 实现的组建内部必须定义一个 render 函数
//     render(){
//         console.log(this.props);
//         // Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
//         //通过分析以上报错发现，在 render 函数中还必须 return 一个东西，如果没有什么需要被 return 的则需要 return null
//         return <div>
//             <h1>这是使用 class 类创建的组件</h1>
//             {/* 在 function 定义的组件中，如果要想使用 props 必须先定义，否则无法直接使用
//             但是在 class 定义的组件中，可以直接使用 this.props 来直接访问，不需要预先接收 props
//             是要是 props 属性都是只读的*/}
//             <h3>外部传过来的数据是：{this.props.address}---{this.props.info}</h3>
//         </div>   
//     }

// }
ReactDom.render(<div>
    {/* <Hello name={obj.name} age={obj.age} addr={obj.addr}></Hello> */}
    <Hello {...obj}></Hello>
    <HelloJSX {...obj}></HelloJSX>
    <Hello2 address="哈尔滨黑龙江大学" info="数据科学与技术学院"></Hello2>
</div>,document.getElementById('app'))