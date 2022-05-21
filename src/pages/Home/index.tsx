import React from "react";
import InputSelect from "../../components/InputSelect";

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
                <div className="memoryBoard">
                    <div className="memoryBoard__item">A</div>
                    <div className="memoryBoard__item">B</div>
                    <div className="memoryBoard__item">C</div>
                    <div className="memoryBoard__item">D</div>
                    <div className="memoryBoard__item">E</div>
                    <div className="memoryBoard__item">F</div>
                    <div className="memoryBoard__item">A</div>
                    <div className="memoryBoard__item">B</div>
                    <div className="memoryBoard__item">C</div>
                    <div className="memoryBoard__item">D</div>
                    <div className="memoryBoard__item">E</div>
                    <div className="memoryBoard__item">F</div>
                    <div className="memoryBoard__item">A</div>
                    <div className="memoryBoard__item">B</div>
                    <div className="memoryBoard__item">C</div>
                    <div className="memoryBoard__item">D</div>
                    <div className="memoryBoard__item">E</div>
                    <div className="memoryBoard__item">F</div>
                    <div className="memoryBoard__item">A</div>
                    <div className="memoryBoard__item">B</div>
                    <div className="memoryBoard__item">C</div>
                    <div className="memoryBoard__item">D</div>
                    <div className="memoryBoard__item">E</div>
                    <div className="memoryBoard__item">F</div>
                </div>
            </div>
        </div>
    )
}

export default Home;