const store= {
    state:{
        sarr:[10,20,30]
    },
    actions:{
        sarrpush(newState:{sarr:number[]},action:{type:string,
            val:number}){
            newState.sarr.push(action.val)
        },
    
    },
    //名字统一管理
   //sarrpush:"sarrpush"

   actionNames:{}
   
}
let actionNames = {} //定义一个全局的actionNames\
//actionNames有多少对键值对，取决于action里面有多少个函数，所以遍历store.action,给actionNames添加键值对
for (let key in store.actions){
    actionNames[key] =key
}
store.actionNames=actionNames;
export default store