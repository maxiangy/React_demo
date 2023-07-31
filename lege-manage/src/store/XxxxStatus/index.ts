//增加一个新的模块，只需要在index中引入
const store= {
    state:{
        //放数据
    },
    actions:{
        //放同步方法
    
    },
    asyncactions:{
        //放异步方法
    
    },

   actionNames:{}
   
}
let actionNames = {} 

for (let key in store.actions){
    actionNames[key] =key
}
store.actionNames=actionNames;
export default store

