import React from "react";

import "./style.scss";
import pokeball from "../../../assets/images/icon-pokebola.png";
import { IPokemonMemoryBoard } from "../../../schemas/PokemonSchemas";

type MemoryBoard = {
    data: IPokemonMemoryBoard[]
    onSelectCard: (id: number) => void
}

const MemoryBoard: React.FC<MemoryBoard> = (props) => {

    function viewList() {
        return props.data.map((item) => {
            return (
                <div
                    key={item.id}
                    className={`memoryBoard__item memoryBoard__item-${item.checked ? "front" :"back"}`}
                    onClick={() => props.onSelectCard(item.id)}
                >
                    <div className="memoryBoard__item-border">
                        <div className="memoryBoard__item-inner">
                            <p>{item.checked ? item.name :"Pokemon"}</p>
                            <img src={item.checked ? item.imageUrl : pokeball} alt="Pokeboll Icon" />
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