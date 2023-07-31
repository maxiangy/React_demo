//【重点】 类型声明里面不要直接引用import...from
//而是使用import("@/store")这种语法
//store.d.ts 文件的命名约定是将其命名为与 JavaScript 文件相同的名称，
//但使用 .d.ts 扩展名。这样的类型声明文件通常用于描述与该文件同名的 JavaScript 模块或库的类型信息。
//import store from "@/store";
//TS中提供了ReturnType,用来获取函数的返回值
type RootState = ReturnType<typeof import ("@/store").getState>

interface Window{
   __REDUX_DEVTOOLS_EXTENSION__:function ;
   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :function ;    
    
}