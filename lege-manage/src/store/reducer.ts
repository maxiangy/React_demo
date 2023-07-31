// import handleNum from "./NumStatus"
// import handleArr from "./ArrStatus"
// //管理数据
// const defaultState = {
// //num:handleNum.state.num //这种写法一次要写多次
//         ...handleNum.state, //解构写法
//         ...handleArr.state
// }
//     //定义一个 reducer 的函数，接受一个名为 state 的参数，并设置默认参数为 defaultState。
//     //这个函数的目的是返回一个新的状态对象
// let reducer =(state = defaultState,action:{type:string,val:number})=>{
//     // 通过 JSON.stringify(state) 将原始状态对象转换为字符串，然后再通过 JSON.parse() 将其解析为一个新的对象 newState。
//     // 这样做的目的是为了创建一个新的副本，以确保对状态的修改不会影响到原始对象。
//     let newState = JSON.parse(JSON.stringify(state))
//     switch(action.type){
//         case handleNum.add1:
//             handleNum.actions[handleNum.add1](newState,action)
//             break;
//             case handleNum.add2:
//             handleNum.actions[handleNum.add2](newState,action)
//             break;
//             default:
//                 break;
//     }
// return newState
// }

// export default reducer