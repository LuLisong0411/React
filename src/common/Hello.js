import React from 'react'

function Hello(props){
    return <div>
        <h1>这是Hello组件中定义的元素</h1>
        <p>{props.name}--{props.age}--{props.addr}</p>
    </div>
}
export default Hello