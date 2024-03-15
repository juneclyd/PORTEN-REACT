import React from "react";
import '../styles/Like.css';
import Love from '../svg_PORTEN/Like.svg';

function Like(){
    return(
        <div className="Like">
            <div className="listLike">
                <h1>СПИСОК ПОНРАВИВШИХСЯ</h1>
                <img src={Love}/>
                <p>ВАШ СПИСОК ПУСТ</p>
                <span><a href="/Register">Нажмите здесь</a>, чтобы продолжить покупки</span>
            </div>
        </div>
    )
}

export default Like