import './style/style.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'



function Button(props) {
    let { children, type, onClick } = props
    return (
        <div className='ml-button' onClick={onClick}>
            <span className={type}>{children}</span>
        </div>
    )
}


// 拆组件 头部
function MadalHeader(props) {
    let {title,onCancel,close}=props
    return (
        <div>
            <div>{title}</div>
            <div onClick={onCancel}>{close && 'X'}</div>
        </div>
    )
}

// 底部
function MadalFooter(props){
    let {type,onCancel,onOk,footer}=props
     // 渲染函数
     let renderFoot = () => {
        let btn = []
        switch (type) {
            case 'confirm':
                btn = [<Button key='1' type='info' onClick={onOk}>确认</Button>,
                <Button key='2' type='danger' onClick={onCancel}>取消</Button>]
                break;
            case 'danger':
                btn = [<Button key='1' type='danger' onClick={onOk}>删除</Button>,
                <Button key='2' onClick={onCancel}>取消</Button>]
                break;
            case 'info':
                btn = [
                    <Button type='primary' key='1' onClick={onCancel}>我知道了</Button>,
                ]
                break
        }
        return btn
    }
    return(
        footer ? footer() : renderFoot() 
    )
}




// 弹窗
function Madal(props) {
    let { children, visiable, onCancel, width } = props
   
    // 关闭遮罩层
    let handleClick = (e) => {
        if (e.target.dataset.self) {
            onCancel()
        }
    }
    return (
        <div className='ml-layer'
            data-self='layer'
            style={{ display: visiable ? 'block' : 'none' }}
            onClick={handleClick}
        >
            <div className='ml-modal' style={{ width: `${width}px`, marginLeft: `-${width / 2}px` }}>
                <header>
                    <MadalHeader {...props}/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <MadalFooter {...props}/>
                </footer>
            </div>
        </div>
    )
}

Madal.propTypes = {
    title: PropTypes.node,
    close: PropTypes.bool,
    children: PropTypes.node,
    type: PropTypes.oneOf(['confirm', 'danger', 'info']),
    visiable: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    footer: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Madal.defaultProps = {
    title: '默认标题',
    close: true,
    children: <div>默认内容</div>,
    type: 'info',
    visiable: false,
    onCancel: () => { },
    onOk: () => { },
    footer: false,
    width: 520
}

function PageA() {
    let [visiable, setVisiable] = useState(false);
    let submit = () => {
        setTimeout(() => {
            console.log('发送请求');
            setVisiable(false)
        }, 100)
    }
    return (
        <div>
            <button onClick={() => setVisiable(true)}>open modal</button>
            <Madal
                title={<span style={{ color: 'red' }}>删除用户</span>}
                close
                type='confirm'
                visiable={visiable}
                onCancel={() => setVisiable(false)}
                onOk={submit}
                // 定制按钮组
                // footer={
                //     () => {
                //         return [
                //             <Button type='info' key='1' onClick={submit}>确认</Button>,
                //             <Button type='danger' key='2' onClick={() => setVisiable(false)}>残忍离开</Button>
                //         ]
                //     }
                // }
                width={650}
            >
                <div>
                    <input type="text" />
                    <div>你确定要添加此用户吗</div>
                </div>
            </Madal>
        </div>
    )
}


export default PageA