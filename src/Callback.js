import {LogtoProvider, useHandleSignInCallback, useLogto} from "@logto/react";
// import {
//     Link,
// } from "react-router-dom";
// import { browserHistory } from 'react-router';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import App from "./App";
import React from "react";
import logo from "./logo.svg";

const SignOut = () => {
    const { signOut } = useLogto();

    return <button onClick={() => signOut('http://localhost:3000')}>退出登录</button>;
};

const config = {
    endpoint: 'http://localhost:3001',
    appId: 'gnVQpa0IiEff6LcmCXuvw',
};

const Callback = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };

    const { isLoading } = useHandleSignInCallback(() => {
        // 完成时跳转至根路由
        navigateHome();
    });

    // 当登录认证尚未完成时
    if (isLoading) {
        return <div>正在重定向...</div>;
    }

    return <LogtoProvider config={config}>
        <div className="App">
            <header className="App-header">
                <SignOut />
            </header>
        </div>
    </LogtoProvider>;
};

export default Callback;