import React, { useEffect, useState } from "react";

import "./style.scss";
import pokeball from "../../../assets/images/icon-pokebola.png";

const MemoryBoard: React.FC = () => {

    const [selectCard, setSelectCard] = useState<number[]>([]);

    function onSelectCard(id: number) {
        if (selectCard.length === 2) return;
        setSelectCard((state) => [...state, id]);
    }

    function viewList() {
        const array = Array.from(Array(20).keys());
        return array.map((item) => {
            return (
                <div
                    key={item}
                    className={`memoryBoard__item memoryBoard__item-${selectCard.includes(item) ? "front" :"back"}`}
                    onClick={() => onSelectCard(item)}
                >
                    <div className="memoryBoard__item-border">
                        <div className="memoryBoard__item-inner">
                            <p>{selectCard.includes(item) ? "Bulbasaur" :"Pokemon"}</p>
                            <img src={selectCard.includes(item) ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" : pokeball} alt="Pokeboll Icon" />
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <div className="memoryBoard">
            {viewList()}
        </div>
    )
}

export default MemoryBoard;