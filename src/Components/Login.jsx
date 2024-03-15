import React from "react";
import '../styles/Login.css';
import '../Reset/LoginReset.css';

function Login(){
    return(
        <div className="login">
             <h1>Авторизация</h1>
            <div className="line"></div>
            <div className="loginForm">
                <input type="email" placeholder="Введите свое Email" className="input"/>
                <input type="password" placeholder="Введите свой пароль" className="input"/>
            </div>
            <button className="button">Войти</button>
        </div>
    )
}


export default Login