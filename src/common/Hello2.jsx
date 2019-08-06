import React from 'react'

export default class Hello2 extends React.Component{
    constructor(props){
        // 如果使用了 extends 实现了继承，那么在 constructor 的第一行一定要显示调用一下 super() ;super() 表示父类的构造函数。
        super(props);
        //在 constructor 中，如果想要访问 props 属性，不能直接使用 this.props 而是需要在 constructor 的构造器
        // 参数列表中显示定义 props 属性来接收，才能正常访问。
        // console.log(this.props);            //undefined
        console.log(props);
    }
    //No `render` method found on the returned component instance: you may have forgotten to define `render`
    //通过分析以上报错，发现提示我们在 class 实现的组建内部必须定义一个 render 函数
    render(){
        console.log(this.props);
        // Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
        //通过分析以上报错发现，在 render 函数中还必须 return 一个东西，如果没有什么需要被 return 的则需要 return null
        return <div>
            <h1>这是使用 class 类创建的组件</h1>
            {/* 在 function 定义的组件中，如果要想使用 props 必须先定义，否则无法直接使用
            但是在 class 定义的组件中，可以直接使用 this.props 来直接访问，不需要预先接收 props
            是要是 props 属性都是只读的*/}
            <h3>外部传过来的数据是：{this.props.address}---{this.props.info}</h3>
        </div>   
    } 
}