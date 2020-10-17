import React from "react"
import "./MainPage.css"
import Header from "./Header/Header";
import Main from "./Main/Main";

const MainPage = () => {
    return (
        <div className={"mainPage"}>
            <Header/>
            <Main/>
        </div>
    )
}
export default MainPage