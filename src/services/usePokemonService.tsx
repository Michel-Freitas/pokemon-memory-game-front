import { api } from "../config/axiosConfig"
import { EggGroup } from "../schemas/PokemonSchemas";

export function usePokemonService() {

    const eggGroups = async (parameter?: string): Promise<EggGroup[] | []> => {
        try {
            let query:string = "egg-group/";

            if(parameter) query+=parameter;

            const { data } = await api.get(query);

            if(!data) return [];

            const resultList: EggGroup[] = data.results.map((item: any)=> {
                return {
                    name: item.name,
                    url: item.url
                }
            });

            return resultList;
        } catch (error) {
            return [];
        }
    }

    return {
        eggGroups
    }
}