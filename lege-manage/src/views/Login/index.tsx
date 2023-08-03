import { Button, Input, Space,message } from 'antd';
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import { ChangeEvent, useEffect, useState } from "react";
import  "./login.less"
import { useNavigate } from 'react-router-dom';
import {CaptchaAPI, LoginAPI} from "@/request/api.ts"
const view = ()=> {
    let navigateTo= useNavigate();
   // 加载完这个组件之后,加载背景
     useEffect(()=>{
        getCaptchaImg();
        initLoginBg();
        window.onresize = function(){initLoginBg()};
     },[])

    //获取用户输入的信息
    const [usernameVal,setUsernameVal]=useState("")//定义用户输入用户名信息这个变量
    const [passwordVal,setPasswordVal]=useState("")//定义用户输入密码信息这个变量
    const [captchaVal,setCaptchaVal]=useState("")//定义用户输入验证码这个变量

    //定义一个变量保存验证码图片
    const [captchaImg,setcaptchaImg]=useState("")
     //点击登录按钮的事件函数
    const gotoLogin = async ()=>{
        console.log("用户名，密码，验证码，分别是",usernameVal,passwordVal,captchaVal);
        //验证是否有空值
        if(!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim())
        {
            message.warning("请输入完整信息")
             return 
        }
        //发起登录请求
      let LoginAPIRes =await LoginAPI({
            username:usernameVal,
            password:passwordVal,
            code:captchaVal,
            uuid:localStorage.getItem("uuid") as string   
        })

            console.log(LoginAPIRes);
            if(LoginAPIRes.code===200){
                //1 提示登录成功
                message.success("登录成功！"),
                //2 保存token
                localStorage.setItem("react-manage-token",LoginAPIRes.token)
                //3 跳转到page1
                navigateTo("/page1")
                //4 删除本地保存中的uuid
                localStorage.removeItem("uuid")
            }
        }
        



    //验证码请求,点击验证码图片盒子函数
        const getCaptchaImg=async ()=>{
           // alert(123)
        //    CaptchaAPI().then((res)=>{
        //     console.log(res);    
        //    })
        let captchaAPIRes = await CaptchaAPI();
        console.log(captchaAPIRes);
        if (captchaAPIRes.code===200){

            // 1 把图片数据显示在img上
            setcaptchaImg("data:image/gif;base64,"+captchaAPIRes.img)

            // 2 本地保存uuid
            localStorage.setItem("uuid",captchaAPIRes.uuid)
        }    
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
    const captchaChange =(e:ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target.value);
        //修改passwordVal为用户输入的值，拿到passwordVal就等于拿到用户输入的密码信息
        setCaptchaVal(e.target.value)
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
            {/* 验证盒子 */}
            <div className='captchaBox'>
            <Input placeholder="验证码" className='ipt' onChange={captchaChange} / >
            <div className="captchaImg" onClick={getCaptchaImg}>
            <img src={captchaImg} height="38" alt="" />
            </div>
            </div>
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