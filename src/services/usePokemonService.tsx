import { api } from "../config/axiosConfig"
import { IEggGroup, IPokemon } from "../schemas/PokemonSchemas";

export function usePokemonService() {

  const eggGroups = async (parameter?: string): Promise<IEggGroup[] | []> => {
    try {
      let query: string = "egg-group/";

      if (parameter) query += parameter;

      const { data } = await api.get(query);

      if (!data) return [];

      let resultList: IEggGroup[] = [];

      if (parameter) {
        resultList = data.pokemon_species.map((item: any) => {
          return {
            name: item.name,
            url: item.url,
            checked: false
          }
        });
        return resultList;
      }

      resultList = data.results.map((item: any) => {
        return {
          name: item.name,
          url: item.url,
          checked: false
        }
      });
      return resultList;
    } catch (error) {
      return [];
    }
  }

  const pokemon = async (nameOrId: string): Promise<IPokemon | undefined> => {
    try {

      const { data } = await api.get(`pokemon/${nameOrId}`);

      if (!data) return;

      const imgUrl = data.sprites.other.dream_world.front_default != null
      ? data.sprites.other.dream_world.front_default
      : data.sprites.home.front_default;

      const pokemon: IPokemon = {
        name: data.name,
        imageUrl: imgUrl,
        checked: false
      }

      return pokemon;

    } catch (error) {
      return;
    }
  }

  return {
    eggGroups,
    pokemon
  }
}