import React from "react";
import '../styles/Register.css'

function Register(){
    return(
        <div className="login">
            <h1>Авторизация</h1>
            <div className="line"></div>
            <form className="loginForm">
                <label for="email">
                    <input type="email" placeholder="Введите свое Email" className="input"/>
                </label>
                <label for="password">
                    <input type="password" placeholder="Введите свой пароль" className="input"/>
                </label>
            </form>
            <button className="button">Войти</button>
        </div>
    )
}


export default Register