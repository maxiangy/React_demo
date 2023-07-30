import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import { useNavigate,useLocation} from "react-router-dom"
import  { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }
// const items: MenuItem[] = [
//   getItem('栏目一', '/page1', <PieChartOutlined />),
//   getItem('栏目二', '/page2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];


const items: MenuItem[] = [
  {
    label:'栏目1',
    key:'/page1',
    icon:<PieChartOutlined />
  },
  {
    label:'栏目2',
    key:'/page2',
    icon:<DesktopOutlined />
  },
  {
    label:'栏目3',
    key:'/page3',
    icon:<UserOutlined />,
    children:[
      {
        label:'栏目301',
          key:'/page3/page301',
      },
      {
        label:'栏目302',
          key:'/page3/page302',
      },
      {
        label:'栏目303',
          key:'/page3/page303',
      },
    ]
  },
  {
    label:'栏目4',
    key:'/page4',
    icon:<TeamOutlined />,
    children:[
      {
        label:'栏目401',
          key:'/page4/page401',
      },
      {
        label:'栏目402',
          key:'/page4/page402',
      },
      
    ]
  },
  {
    label:'栏目5',
    key:'/page5',
    icon:<FileOutlined />
  },

]
const Comp: React.FC = () => {

const navigateTo= useNavigate()
const curentRoute = useLocation();
  const menuClick =(e:{key:string})=>{
    console.log("点击了菜单",e.key);

    //点击跳转到对应路由
    navigateTo(e.key)
  }

//用currentRoute.pathname跟items数组的每一项children的key值进行对比，如果找到了，就要它上一级的key
//这个key给到openKeys数组的元素，作为初始值
 let firstOpenKey:string ="";

 //在这里进行对比
 function findKey(obj:{key:string}){
  return obj.key === curentRoute.pathname
 }

  //多对比的是多个children
  for(let i=0;i<items.length;i++){
    //判断能否找到
  if(items[i]!['childern'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
    firstOpenKey = items[i]!.key as string;
    break;
  }
}

  //设置展开项的初始值
  const [openKeys, setOpenKeys] = useState(['']);
  const handleOpenChange =(keys:string[])=>{ //keys是一个数组，记录了当前哪一项是展开的
    //什么时候执行这个函数里的代码，展开和回收时执行这里的代码
   // console.log(keys);
   //把这个数组修改成最后一项，因为只要一项是展开的，就是刚刚点击的这一项
   setOpenKeys([keys[keys.length-1]])
  }
        return (
            <Menu 
          theme="dark"
          //defaultSelectedKeys表示当前所在样式选中项的key值
          defaultSelectedKeys={['curentRoute.pathname']}
          mode="inline" 
          //菜单项数据
          items={items}
          onClick={menuClick}
          //某项菜单展开和回收事件
          onOpenChange = {handleOpenChange}
          //当前菜单展开项的数组
          openKeys = {openKeys}
          />
        )
}

export default Comp;