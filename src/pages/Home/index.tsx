import React, { useEffect, useState } from "react";
import InputSelect from "../../components/InputSelect";
import { EggGroup } from "../../schemas/PokemonSchemas";
import { usePokemonService } from "../../services/usePokemonService";
import MemoryBoard from "./MemoryBoard";

import "./style.scss";

const Home: React.FC = () => {

    const pokemonService = usePokemonService();

    const [ eggGroups, setEggGroups ] = useState<EggGroup[]>([]);

    useEffect(() => {
        (async () => {
            const eggGroup = await pokemonService.eggGroups();
            setEggGroups(eggGroup);
        })();
    }, []);

    return (
        <div className="home">
            <div className="home__header">
                <div className="header__title">
                    <h1>Jogo da Memória</h1>
                </div>
                <InputSelect data={eggGroups}/>
            </div>
            <div className="home__body">
                <MemoryBoard />
            </div>
        </div>
    )
}

export default Home;