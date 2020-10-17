import React from 'react';
import "./textOptions.css"

const TextOptions = () => {
    return (
        <div className={"text-option"}>
            <i className={"material-icons md-option"}>format_align_left</i>
            <i className={"material-icons md-option"}>format_align_center</i>
            <i className={"material-icons md-option"}>format_align_right</i>
            <i className={"material-icons md-option"}>format_bold</i>
            <i className={"material-icons md-option"}>format_italic</i>
            <i className={"material-icons md-option"}>format_underlined</i>
        </div>
    );
};

export default TextOptions;