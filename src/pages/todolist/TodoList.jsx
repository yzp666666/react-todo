import React,{useState} from "react";

// class TodoList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todo: '',
//             list: []
//         }
//     }
//     getTodo(e) {
//         this.setState({
//             todo: e.target.value
//         })
//     }
//     // 添加todo
//     confirm() {
//         if(!this.state.todo){
//             alert('输入框不能为空哦~')
//             return ;
//         }
//         if(this.state.list.some(item=>item.title==this.state.todo)){
//             alert('请不要重复添加哦~');
//             return
//         }
//         this.setState((state) => {
//             return {
//                 list: [...state.list, { id: Date.now(), title: this.state.todo, done: false }]
//             }
//         })
//         //清空input框
//         this.setState({
//             todo: ''
//         })
//     }
//     // 删除
//     delTodo(id){
//         this.setState((state)=>{
//             return {
//                 list:state.list.filter(item=>item.id!=id)
//             }
//         })
//     }
//     // 回车事件
//     enterTodo(e){
//         if(e.keyCode==13){
//             this.confirm()
//         }
//     }
//     render() {
//         let { todo, list } = this.state
//         return (
//             <div>
//                 {/* 受控组件 */}
//                 <input type="text" 
//                 value={todo} 
//                 onChange={(e) => { this.getTodo(e) }}
//                 onKeyDown={(e)=>{this.enterTodo(e)}} 
//                 />
//                 <button onClick={() => { this.confirm() }}>添加</button>
//                 <div>
//                     {
//                         list.map((item, index) => (
//                             <div key={index}>
//                                 <span>{item.title}</span>
//                                 ----
//                                 <span>{index}</span>
//                                 <button onClick={()=>{this.delTodo(item.id)}}>X</button>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

function TodoList(){
    let [todo,setTodo]=useState('');
    let [list,setList]=useState([])
    
    let confirm=()=>{
        if(!todo.trim()){
            alert('请输入something')
            return
        }
        if(list.some(item=>item.title==todo)){
            alert('请不要重复输入');
            return 
        }
        setList([...list,{id:Date.now(),title:todo,done:false}]);
        setTodo('')
    }
    //删除todo
    let delTodo=(id)=>{
        setList(list.filter(item=>item.id!=id))
    }
    let addEnter=(e)=>{
        if(e.keyCode==13){
            confirm()
        }
    }
    return(
        <div>
            <input type="text" 
            value={todo} 
            onChange={(e)=>setTodo(e.target.value)}
            onKeyDown={(e)=>addEnter(e)}
            />
            <button onClick={confirm}>添加</button>
                {
                    list.map((item,index)=>(
                        <div key={index}>
                            <span>{item.title}</span>
                            ----
                            <span>{index}</span>
                            <span 
                            style={{marginLeft:'16px',color:'red',cursor:'pointer'}}
                            // delTodo(item.id)如果这样写就 意味着函数直接执行了 
                            // 需要传递参数的话 前面得写箭头函数
                            onClick={()=>delTodo(item.id)}
                            >X</span>
                        </div>
                    ))
                }
        </div>
    )
}


export default TodoList