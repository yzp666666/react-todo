import {Component} from 'react'



//#region
/* class DemoA extends Component{
    //对象组件生命周期
    constructor(){
        super();//调用父组件的constructor
        // 定义状态
        this.state={
            count:1
        }
    }
    // 挂载生命周期钩子
    componentDidMount(){
        console.log(this.refs.box.style.color='blue');
    }
    // 更新生命周期钩子
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    add(){
        // setState修改状态的唯一途径
        // 调用setState后会重新render
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        let {count}=this.state
        // 在类组件中是有this 表示当前组件实例
        // console.log(this);
        // 父传递给子的数据，都在this.props上面
        let {a,b}=this.props
        console.log(a,b);
        return(
            <div>
                <h1 ref='box'>对象式组件----{count}</h1>
                <button onClick={()=>{this.add()}}>+1</button>
            </div>
        )
    }
} */
//#endregion

// 特点：没有this，没有state，没有生命周期，没有是上下文，没有ref，函数式编程
// 优点：性能更好一点
// 从16.8开始，React新增了hook，这些hook，配合函数式组件实现，可以实现类组件中的功能。
import {useState,useEffect,useRef} from 'react'
function DemoA(props){
    // props接收父组件传来的参数
    let [count,setCount]=useState(1);
    let box=useRef(null);
    let {a,b}=props
    // 等价于类组件中的componentDidMount钩子函数
    useEffect(()=>{
        console.log('页面渲染完成/更新完成');
        box.current.style.color='pink'
    },[count])
    return(
        <div>
            <h1 ref={box}>函数式组件----{count}</h1>
            <p>父组件传来的a---{a} b----{b}</p>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
        </div>
    )
}

export default DemoA