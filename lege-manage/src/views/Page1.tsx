import { useSelector ,useDispatch } from "react-redux";
//useSelector 钩子函数，它是 react-redux 提供的一个用于从 Redux 数据仓库中选择和提取数据的钩子函数
import numStatus from "@/store/NumStatus"


const Comp =() =>{
// 对num的操作
 //通过useDispatch修改仓库数据
 const dispatch = useDispatch()
    //获取仓库数据
    const {num} =useSelector((state:RootState)=>({
        num:state.handleNum.num
        
    }))
    const changeNum =()=>{
      //  dispatch({type:"字符串(是一个记号)",val:3}) type是固定的 val是自定义的
        //  dispatch({type:"add1"})

          dispatch({type:"add2",val:10})
    }
    const changeNum1 =()=>{
          //同步的写法  dispatch({type:"add1"})
          //异步的写法 redux-thunk的用法 基本格式：dispath(异步执行的函数)
        //   dispatch((dis:Function)=>{
        //     setTimeout(()=>{
        //         dis({type:"add1"})
        //     },1000

        //     )
        //   })
        //需要传的参数是内部调用没，不需要我们自己调整
            dispatch(numStatus.asyncActions.asyncAdd1)
      }

    const changeArr =()=>{
            dispatch({type:"sarrpush",val:100})

    }
    //对sarr的操作
    //获取sarr数据
    const {sarr} =useSelector((state:RootState)=>({
        sarr:state.handleArr.sarr
    }))

    return(
        <div className='home'>
            <p>这是Page1页面内容</p>
            <h2>{num}</h2>
            <button onClick={changeNum}>按钮加1</button>
            <button onClick={changeNum1}>异步按钮加1</button>
            <h2>{sarr}</h2>
            <button onClick={changeArr}>按钮加100</button>
        </div>
    )
}

export default Comp