import React from "react";
import InputSelect from "../../components/InputSelect";
import MemoryBoard from "./MemoryBoard";

import "./style.scss";

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="header__title">
                    <h1>Jogo da Memória</h1>
                </div>
                <InputSelect />
            </div>
            <div className="home__body">
                <MemoryBoard />
            </div>
        </div>
    )
}

export default Home;