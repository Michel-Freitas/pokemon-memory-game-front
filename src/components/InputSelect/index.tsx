import React, { useState } from "react";
import { ArrowIcon } from "../../assets/icons";
import { EggGroup } from "../../schemas/PokemonSchemas";

import "./style.scss";

type InputSelect = {
    data: EggGroup[]
}

const  InputSelect: React.FC<InputSelect> = (props) => {

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
                {props.data.map((item) => {
                    return <li key={item.name} className="inputSelectList__item" onClick={() => selectItem('1')}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default InputSelect;