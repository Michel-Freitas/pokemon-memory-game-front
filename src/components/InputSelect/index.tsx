import React, { useState } from "react";
import { ArrowIcon } from "../../assets/icons";
import { EggGroup } from "../../schemas/PokemonSchemas";

import "./style.scss";

type InputSelect = {
    data: EggGroup[]
    onChange: (name: string) => void
}

const  InputSelect: React.FC<InputSelect> = (props) => {

    const [listIsVisible, setListIsVisible] = useState<boolean>(false);

    const selectedData = props.data.find((item) => item.checked === true);

    return (
        <div className="inputSelect">
            <button
                className="inputSelect__btn"
                onClick={() => setListIsVisible((state) => !state)}
            >
                {selectedData ? selectedData.name : "Select"}
                <ArrowIcon color="#9b0e0e"/>
            </button>
            <ul className={`inputSelectList ${listIsVisible && "inputSelectList-show"}`}>
                {props.data.map((item) => {
                    return <li key={item.name} className="inputSelectList__item" onClick={() => props.onChange(item.name)}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default InputSelect;