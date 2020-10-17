import React from 'react';
import './header.css'
import FileOptions from "./FileOptions/FileOptions";
import TextOptions from "./TextOptions/TextOptions";

const Header = () => {
    return (
        <div className={"header"}>
            <FileOptions/>
            <TextOptions/>
        </div>
    );
};

export default Header;