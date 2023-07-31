import { Button, Input, Space } from 'antd';
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import { ChangeEvent, useEffect, useState } from "react";
import  "./login.less"
import {captchaAPI} from "@/request/api.ts"
const view = ()=> {

   // 加载完这个组件之后,加载背景
    useEffect(()=>{
        initLoginBg();
        window.onresize = function(){initLoginBg()};
    },[])

    //获取用户输入的信息
    const [usernameVal,setUsernameVal]=useState("")//定义用户输入用户名信息这个变量
    const [passwordVal,setPasswordVal]=useState("")//定义用户输入密码信息这个变量
    const [captchaVal,setCaptchaVal]=useState("")//定义用户输入验证码这个变量
    const gotoLogin =()=>{
        console.log("用户名，密码，验证码，分别是",usernameVal,passwordVal,captchaVal);
        
        }
    //验证码请求,点击验证码图片盒子函数
        const getCaptchaImg=()=>{
           // alert(123)
           captchaAPI().then((res)=>{
            console.log(res);
            
           })
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
            <img src="data:image/gif;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAA
            gGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxN
            DQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyM
            jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAA8AKADASIAAhEBAxEB/
            8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAA
            F9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo
            0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWW
            l5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8
            vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBA
            QDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOE
            l8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOE
            hYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4
            uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDU8L+GNAuPCejTTaHpkksljA7u9p
            GWZiikkkjkmtObwz4VtYHnuND0aKGMbnke0iVVHqSRT/CP/Im6H/2D7f8A9FrWjqFha6p
            p1xY3kYkt50KOp7g/1oAydO0HwfqtjFe2Oi6NPbSjKSJZR4POP7vrVseEPDX/AELuk/8A
            gFH/APE15DoniaX4WeINT0G/8y907dvh8ojcCeh5PGRwR6j8/VfCnjTS/Ftq8tizJLHjz
            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" height="38" alt="" />
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