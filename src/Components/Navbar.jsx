import React from "react";
import '../styles/Navbar.css';
import Phone from '../svg_PORTEN/phone.svg';
import Door from '../svg_PORTEN/door.svg';
import Cart from '../svg_PORTEN/cart.svg';
import Lupa from '../svg_PORTEN/lupa.svg';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <header class="header">
                <div class="info">
                    <div class="work_info">
                        <img src= {Phone}/>
                        <span>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00</span>
                    </div>

                    <div class="entry">
                        <img src={Door}/>
                        <a href="#">
                            <Link to="/Login">Войти / Регистрация</Link>
                        </a>
                    </div>
                </div>

                <div class="menu">
                    <div class="name">
                        <Link to="/"><span>PORTEN</span></Link>
                    </div>

                    <div class="header_buttons">
                        <a class="buttons" href="#">
                            <Link to="/Like"><p>Понравилось</p></Link>
                        </a>
                        <a class="buttons" href="#">
                            <Link to="/Login"><p>личный кабинет</p></Link>
                        </a>
                        <a class="buttons" href="#">
                            <p><Link to="/Settings"><p>настройки</p></Link></p>
                        </a>
                    </div>

                    <div class="icons">
                        <Link to="/Busket"><img src={Cart}/></Link>
                        <Link to="/Search"><img src={Lupa}/></Link>
                    </div> 
                </div>
            </header>
        </div>
    )
}


export default Navbar;