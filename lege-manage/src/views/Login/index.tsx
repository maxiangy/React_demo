import { Button, Input, Space } from 'antd';
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import { ChangeEvent, useEffect, useState } from "react";
const view = ()=>{

    //加载完这个组件之后,加载背景
    // useEffect(()=>{
    //     initLoginBg();
    //     window.onresize = function(){initLoginBg()};
    // },[])

    //获取用户输入的信息
    const [usernameVal,setUsernameVal]=useState("")//定义用户输入用户名信息这个变量
    const [passwordVal,setPasswordVal]=useState("")//定义用户输入密码信息这个变量

    const gotoLogin =()=>{
        console.log("用户名，密码，分别是",usernameVal,passwordVal);
        
    }

    const usernameChange =(e:ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target.value);
        //修改usernameVal为用户输入的值，拿到usernameVal就等于拿到用户输入的用户名信息
        setUsernameVal(e.target.value)
    }
    const passwordChange =(e:ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target.value);
        //修改passwordVal为用户输入的值，拿到passwordVal就等于拿到用户输入的密码信息
        setPasswordVal(e.target.value)
    }
    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox}>
            <div className={styles.title}>
            <h1>MXY&nbsp;·&nbsp;通用后台系统</h1>
            <p>Strive Everyday</p>
            </div>
            {/* 表单部分 */}
            <div className="form">
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Input placeholder="用户名" onChange={usernameChange}/>
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <Button type="primary" block onClick={gotoLogin}>
            登录
            </Button>
            <Button block>注册</Button>
            </Space>
            </div>
        </div>
        </div>
    )
}
export default view