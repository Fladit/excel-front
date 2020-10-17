import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "./tablepage.css"

const TablePage = () => {
    return (
        <div className={"tablePage"}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default TablePage;