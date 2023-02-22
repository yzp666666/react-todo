import React from "react";

// class DemoA extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             flag:true
//         }
//     }

//     render(){
//         let {flag}=this.state
//         return(
//             <div>
//                 <h2>类组件</h2>
//                 <hr />
//                 {/* {flag&&
//                 <div>
//                     <h1>我要隐藏/显示了</h1>
//                     <h1>我要隐藏/显示了</h1>
//                     <h1>我要隐藏/显示了</h1>
//                     <h1>我要隐藏/显示了</h1>
//                 </div>
//                 } */}
//                 {flag?<h3>我是h3</h3>:<h4>我是h4</h4>
//                 }
//                 <button onClick={()=>this.setState(state=>({flag:!state.flag}))}>显示/隐藏</button>
//             </div>
//         )
//     }
// }
class DemoA extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }
    renderHn(){
        let {num}=this.state
        let res=null;
        switch (num) {
            case 1:
                res=<h1>我是h1</h1>
                break;
            case 2:
                res=<h2>我是h2</h2>
                break;
            case 3:
                res=<h3>我是h3</h3>
                break;
            case 4:
                res=<h4>我是h4</h4>
                break;
            case 5:
                res=<h5>我是h5</h5>
                break;
            case 6:
                res=<h6>我是h6</h6>
                break;
        }
        return res

    }
    render(){
        let {num}=this.state
        return(
            <div>
                <h2>类组件--{num}</h2>
                <hr />
                {this.renderHn()}
                <button onClick={()=>this.setState(state=>({num:(state.num+1)%7}))}>显示/隐藏</button>
            </div>
        )
    }
}


export default DemoA