import handleNum from "./index"

//管理数据
//const defaultState = {
//num:handleNum.state.num //这种写法一次要写多次
       // ...handleNum.state, //解构写法
        //...handleArr.state
//}
    //定义一个 reducer 的函数，接受一个名为 state 的参数，并设置默认参数为 defaultState。
    //这个函数的目的是返回一个新的状态对象
let reducer =(state = {...handleNum.state},action:{type:string,val:number})=>{
    // 通过 JSON.stringify(state) 将原始状态对象转换为字符串，然后再通过 JSON.parse() 将其解析为一个新的对象 newState。
    // 这样做的目的是为了创建一个新的副本，以确保对状态的修改不会影响到原始对象。
    
    let newState = JSON.parse(JSON.stringify(state))

    // 思路：switch的做法是拿着action.type和case后面的每一个进行对比，
    // 这个做法很像遍历
    // switch(action.type){
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState,action)
    //         break;
    //         case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState,action)
    //         break;
    //         default:
    //             break;
    // }
    //【优化】上面这样写，每添加一个方法，都要在这里多写一句case
    //用action.type和actionNames进行每一项的对比，如果相等，就调用 模块名.action[下标](newState,action)
    for (let key in handleNum.actionNames){
        //key是每一个键
        //判断是否相等
        //每一次增加一个方法，都不需要再手动改
        if(action.type===handleNum.actionNames[key]){
            handleNum.actions[handleNum.actionNames[key]](newState,action);
            break;
        }
    }

    return newState
}

export default reducer