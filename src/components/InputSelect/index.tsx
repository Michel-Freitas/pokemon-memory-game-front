import React, { useState } from "react";
import { ArrowIcon } from "../../assets/icons";

import "./style.scss";

const  InputSelect: React.FC = () => {

    const [listIsVisible, setListIsVisible] = useState<boolean>(false);

    function selectItem(id: string) {
        setListIsVisible(false)
        alert(id);
    }

    return (
        <div className="inputSelect">
            <button
                className="inputSelect__btn"
                onClick={() => setListIsVisible((state) => !state)}
            >
                Select
                <ArrowIcon color="#9b0e0e"/>
            </button>
            <ul className={`inputSelectList ${listIsVisible && "inputSelectList-show"}`}>
                <li className="inputSelectList__item" onClick={() => selectItem('1')}>Monster</li>
                <li className="inputSelectList__item" onClick={() => selectItem('2')}>Water1</li>
                <li className="inputSelectList__item" onClick={() => selectItem('3')}>Bug</li>
                <li className="inputSelectList__item" onClick={() => selectItem('4')}>Flying</li>
                <li className="inputSelectList__item" onClick={() => selectItem('5')}>ground</li>
            </ul>
        </div>
    )
}

export default InputSelect;