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

    function selectedEggGroup(name: string) {
        setEggGroups((state) => {
            return state.map((item) => {
                return item.name === name ? {...item, checked: !item.checked} : {...item, checked: false}
            })
        })
    }

    return (
        <div className="home">
            <div className="home__header">
                <div className="header__title">
                    <h1>Jogo da Memória</h1>
                </div>
                <InputSelect
                    data={eggGroups}
                    onChange={selectedEggGroup}
                />
            </div>
            <div className="home__body">
                <MemoryBoard />
            </div>
        </div>
    )
}

export default Home;