import React from 'react';
import "./main.css"

const Main = () => {
    return (
        <div className={"view_port"}>
            <div className={"db-header"}>
                <div>Название</div>
                <div>Дата создания</div>
            </div>
            <ul>
                <li className={"db-element"}>
                    <div> Таблица 1</div>
                    <div> 24.05.2016 </div>
                </li>
                <li className={"db-element"}>
                    <div> Таблица 1</div>
                    <div> 24.05.2016 </div>
                </li>
            </ul>
        </div>
    );
};

export default Main;