import React from 'react';
import "./main.css"
import Formula from "./Formula/Formula";
import Table from "./Table/Table";

const Main = () => {
    return (
        <div className={"main"}>
            <Formula/>
            <Table/>
        </div>
    );
};

export default Main;