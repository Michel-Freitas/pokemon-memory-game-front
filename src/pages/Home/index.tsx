import React, { useEffect, useState } from "react";
import InputSelect from "../../components/InputSelect";
import Loader from "../../components/Loader";
import { IEggGroup, IPokemon, IPokemonMemoryBoard } from "../../schemas/PokemonSchemas";
import { usePokemonService } from "../../services/usePokemonService";
import MemoryBoard from "./MemoryBoard";

import "./style.scss";

const Home: React.FC = () => {

  const pokemonService = usePokemonService();

  const [eggGroups, setEggGroups] = useState<IEggGroup[]>([]);
  const [pokemonList, setPokemonList] = useState<IPokemonMemoryBoard[]>([]);
  const [isOpenLoad, setIsOpenLoad] = useState<boolean>(false);

  const selectedGroup = eggGroups.find((item) => item.checked === true);

  const selectes = pokemonList.filter((item) => item.checked);

  useEffect(() => {
    (async () => {
      const eggGroup = await pokemonService.eggGroups();
      setEggGroups(eggGroup);
    })();
  }, []);

  useEffect(() => {
    if (!selectedGroup) return;
    (async () => {
      setIsOpenLoad(true);
      let result = await pokemonService.eggGroups(selectedGroup.name);
      let listSelectedPokemon: IEggGroup[] = [];
      for (let index = 0; index < 10; index++) {
        const numberIndex = Math.floor(Math.random() * result.length);
        listSelectedPokemon.push(result[numberIndex]);
        result.splice(numberIndex, 1);
      }

      await getPokemon(listSelectedPokemon);
      setIsOpenLoad(false);
    })();
  }, [selectedGroup]);

  useEffect(() => {
    if (selectes.length === 2) {
      if (selectes[0].name === selectes[1].name) {
        console.log("Acerto");
        setTimeout(function () {
          setPokemonList((state) => {
            return state.filter((item) => item.name !== selectes[0].name).sort(()=> Math.random() - 0.5);
          })
        }, 1500);
      } else {
        setTimeout(function () {
          setPokemonList((state) => {
            return state.map((item) => {
              return { ...item, checked: false }
            });
          })
        }, 1500);
      }
    }
  }, [selectes]);

  async function getPokemon(listSelectedPokemon: IEggGroup[]) {
    let pokemonList: IPokemon[] = [];

    for (let index = 0; index < listSelectedPokemon.length; index++) {
      const pokemon = await pokemonService.pokemon(listSelectedPokemon[index].name);
      if (pokemon) {
        pokemonList.push(pokemon);
        pokemonList.push(pokemon);
      }
    }

    const pokemonMemoryBoard: IPokemonMemoryBoard[] = pokemonList.map((item, i) => {
      return { ...item, id: i }
    });

    pokemonMemoryBoard.sort(()=> Math.random() - 0.5);

    setPokemonList(pokemonMemoryBoard);
  }

  function selectedEggGroup(name: string) {
    setEggGroups((state) => {
      return state.map((item) => {
        return item.name === name ? { ...item, checked: !item.checked } : { ...item, checked: false }
      })
    });
  }

  function selectCard(id: number) {
    setPokemonList((state) => {
      return state.map((item) => {
        return item.id === id
          ? { ...item, checked: !item.checked }
          : item
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
          label={selectedGroup ? selectedGroup.name : "Select"}
          data={eggGroups}
          onChange={selectedEggGroup}
        />
      </div>
      <div className="home__body">
        <MemoryBoard
          data={pokemonList}
          onSelectCard={selectCard}
        />
      </div>
      <Loader
        isOpen={isOpenLoad}
      />
    </div>
  )
}

export default Home;