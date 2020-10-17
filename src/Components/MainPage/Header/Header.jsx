import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div>
            <div className={"fake-header"}/>
            <div className={"header"}>Excel Dashboard</div>
            <div className={"new_table_place"}>
                <div className={"view_port"}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"} className={"create_new_table"}>Новая таблица</a>
                </div>
            </div>
        </div>
    );
};

export default Header;