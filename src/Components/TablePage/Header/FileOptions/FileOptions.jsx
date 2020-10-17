import React, {useState} from 'react';
import "./fileOptions.css"

const FileOptions = () => {
    const [tableName, setTableName] = useState("Новая таблица")

    return (
        <div className={"file-options"}>
            <div className={"file-options-tools"}>
                <div className={"file-options-tools-logo"}/>
                <div className={"file-options-tools-main"}>
                    <div className={"file-options-tools-name"}>{tableName}</div>
                    <div className={"file-options-tools-main-list"}>
                        <div className={"tool"}>Файл</div>
                        <div className={"tool"}>Правка</div>
                        <div className={"tool"}>Вид</div>
                        <div className={"tool"}>Вставка</div>
                        <div className={"tool"}>Формат</div>
                        <div className={"tool"}>Данные</div>
                        <div className={"tool"}>Инструменты</div>
                        <div className={"tool"}>Дополнения</div>
                        <div className={"tool"}>Справка</div>
                    </div>
                </div>
            </div>
            <div className={"file-options-account"}>
                <i className={"material-icons md-comment"}>comment</i>
                <div className={"file-options-account-access"}>
                    <i className={"material-icons md-lock"}>lock</i>
                    Настроки Доступа
                </div>
                Avatar
            </div>
        </div>
    );
};

export default FileOptions;