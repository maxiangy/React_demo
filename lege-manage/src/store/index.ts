import {legacy_createStore,combineReducers}  from 'redux'
//import reducer from "./reducer.ts"
import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"


const reducers = combineReducers({
    handleNum,
    handleArr
})
 
//创建数据仓库
const store= legacy_createStore(reducers,window.
    __REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOLS_EXTENSION__ ());

export default store