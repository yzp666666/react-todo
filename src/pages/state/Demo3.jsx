// import React,{Fragment} from "react";

/* let box=(
    <div>
        <h1>Hello React~</h1>
    </div>
)

// React.createElement返回值是对象 这个对象叫jsx元素

let view=React.createElement(
    'div',
    {key:1},
    [
        React.createElement('h1',{key:2},'Hello React~6666')
    ]
)
console.log(view);

function DemoA(){
    return view
} */

// _____________________________

/* let element1=<div>我是一个孤独的div</div>
console.log(element1);
// element1.name='wc'
// element1.key=3

function DemoA(){
    return element1
} */
// _____________________________

// let a=100


// function foo(user){
//     return `${user.firstname} ${user.lastname}`
// }


// function DemoA(){
//     return (
//         <Fragment>
//             {/* {}放的是表达式,只要是值都可以放在{}中  !!任何有值的内容都是表达式*/}
//             <h3>{a}</h3>
//             <h3>{`${a}+100`}</h3>
//             <h3>{foo({firstname:'wang',lastname:'cai'})}</h3>
//             <div>{<span>哈哈</span>}</div>
//         </Fragment>
//     )
// } 

// _____________________________
/* function foo(arg){
    if(arg){
        return <div>{arg}</div>
    }else{
        return <div>我是默认值</div>
    }
}

// jsx也可以做了函数的入参，也就是在调用一个函数时，传递传递一个jsx元素，也可以做为函数的返回值
function DemoA(){
    return (
        <Fragment>
            <h3>{foo()}</h3>
            <h3>{foo(110)}</h3>
            <h3>{foo('hello')}</h3>
            <h3>{foo(<span>我是span</span>)}</h3>
        </Fragment>
    )
}  */
// _____________________________

/* function DemoA(){
    return (
        <Fragment>
            <div style={{border:'1px solid red',height:'200px'}}/>
        </Fragment>
    )
}   */


// _____________________________

/* const Ml={
    Button(){
        return (<button>点我</button>)
    },
    Form(){
        return (<div>Form</div>)
    }
}

function DemoA(){
    return (
        <Fragment>
            <Ml.Button/>
            <Ml.Form/>
        </Fragment>
    )
}  
 */



// _____________________________

// class DemoA extends React.Component{
//     constructor(props){
//         super(props);
//         //定义状态
//         this.state={
//             count:1
//         }
//     }
//     add(){
//         // setState在react18里是异步的
//         /* this.setState({
//             // 不要直接修改
//             count:this.state.count+1
//         }) */
//         // state 形参表示旧值

//         // this.setState((state)=>{
//         //     return{
//         //         count:state.count+1
//         //     }
//         // })
//         // 简写
//         console.log('start',this.state.count);
//         this.setState(state=> ({count:state.count+1}),()=>{
//             console.log('修改成功');
//         })
//         console.log('end',this.state.count);
//     }
//     render(){
//         let {count}=this.state
//         return(
//             <div>
//                 <h1>类组件---{count}</h1>
//                 {/* 通过bind 去修改this的指向 指向组件实例 */}
//                 <button onClick={this.add.bind(this)}>+1</button>
//             </div>
//         )
//     }
// }
// _____________________________
import {useState} from 'react'
function DemoA(){
    let [num,setNum]=useState(1)
    let add=()=>{
        setNum(num+1)
        // setNum(_=>(_+1))
    }
    return(
        <div>
            <h1>函数式组件----{num}</h1>
            <button onClick={add}>+1</button>
        </div>
    )
}

// _____________________________
// _____________________________
// _____________________________
// _____________________________
export default DemoA