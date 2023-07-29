import { useState } from 'react'
//import Comp1 from "@/components/Comp1"
//import Comp2 from "@/components/Comp2"
//import { Button } from 'antd';
//import {UpCircleOutlined} from  "@ant-design/icons"
import { Outlet,Link,useRoutes } from "react-router-dom";
import router from "./Router"
function App() {
  const [count, setCount] = useState(0)
 const outlet= useRoutes(router)
  return (
     <div>
       {/* <Link to="/home">Home</Link> |
        <Link to="/about">About</Link>|
        <Link to="/user">User</Link> */}
      {/* 顶层组件
        <Button type="primary">按钮</Button>
       <Button>按钮</Button>
       <UpCircleOutlined style={{fontSize:"90px" ,color:'blue'}} /> 
       <Outlet></Outlet>
       */}
    
    
     {outlet}
     </div> 
    
   
  )
}

export default App
