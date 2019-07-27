import React from 'react'
import ReactDom from 'react-dom'
//在 React 中，如果要创建DOM元素，只能用 React 提供的 JS API 来创建，不能 [直接] 像 vue 中那样，手写 html 元素
//React.createElement() 方法，用于创建虚拟 DOM 对象，它接收 3 个及以上的参数。
//参数 1 ：是个字符串类型的参数，表示要创建的元素类型。
//参数 2 ：是一个属性对象，表示创建的这个元素上有哪些属性。
//参数 3 ：从第三个参数的位置开始，后面可以放好多的虚拟 DOM 对象，这些参数表示当前元素的子节点。
//创建dom对象
var Div = React.createElement('div',{title:'this is a div',id:'div'},'这是一个div')

//React.render('要渲染的虚拟 DOM 元素','要渲染到页面上的哪个位置中')
//***坑：ReactDom.render() 方法的第二个参数和 vue 不一样，不接收 "#app" 这样的字符串，而是需要传递一个原生的 DOM 对象。
ReactDom.render(Div,document.getElementById('app'))