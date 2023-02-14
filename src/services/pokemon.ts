import axios from "axios";
import {
  api,
} from "../config/api";

interface Result {
  name: string;
  id: number;
};

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  }
};

interface Type {
  slot: number;
  type: Result;
};

interface Name extends Result {
  language: Result;
};

export const getPokeList = async ( page: number ): Promise<AxiosGlobalReturn<Pokemon>> => {
  const perPage = 10;

  try {
    const { status, data: { results, count }} = await api.get('/pokemon', {
      params: {
        limit: perPage,
        offset: perPage * ( page - 1 ),
      }
    });

    if( status !== 200 ) throw new Error(`error retrieving pokémon from page ${ page }`);

    const list: Array<Pokemon> = [];

    await axios.all( results.map( async ( result: Result ) => await api.get(`/pokemon/${ result.name }`).then( async ({ data }) => {
      const pokemon: Partial<Pokemon> = {};

      pokemon.id = data.id;
      pokemon.imageUrl = data.sprites.other["official-artwork"].front_default;

      const stats = {
        hp: data.stats.find(( stat: Stat ) => stat.stat.name === 'hp'),
        speed: data.stats.find(( stat: Stat ) => stat.stat.name === 'speed'),
        attack: data.stats.find(( stat: Stat ) => stat.stat.name === 'attack'),
        defense: data.stats.find(( stat: Stat ) => stat.stat.name === 'defense'),
        specialAttack: data.stats.find(( stat: Stat ) => stat.stat.name === 'special-attack'),
        specialDefense: data.stats.find(( stat: Stat ) => stat.stat.name === 'special-defense'),
      };

      pokemon.stats = [
        {
          name: 'HP',
          value: stats.hp.base_stat,
        },
        {
          name: 'SPEED',
          value: stats.speed.base_stat,
        },
        {
          name: 'ATTACK',
          value: stats.attack.base_stat,
        },
        {
          name: 'DEFENSE',
          value: stats.defense.base_stat,
        },
        {
          name: 'SPECIAL ATTACK',
          value: stats.specialAttack.base_stat,
        },
        {
          name: 'SPECIAL DEFENSE',
          value: stats.specialDefense.base_stat,
        },
      ];

      const types: Array<{
        id: number;
        name: PokeType;
      }> = [];

      await axios.all( data.types.map( async ( type: Type ) => await api.get(`/type/${ type.type.name }`).then(({ data }) => {
        const _type: Name = data.names.find(( name: Name ) => name.language.name === 'en');

        types.push({
          id: type.slot,
          name: _type.name as PokeType,
        });
      })));

      pokemon.types = types.sort(( firstType, secondType ) => firstType.id - secondType.id );

      await api.get(`/pokemon-species/${ result.name }`).then(({ data }) => {
        const name = data.names.find(( name: Name ) => name.language.name === 'en');

        pokemon.name = name.name;
      });

      pokemon.abilities = await axios.all( data.abilities.filter(( ability: any ) => !ability.is_hidden ).map( async ( ability: any ) => await axios.get( ability.ability.url ).then( async ({ data }) => {
        const currentAbility = data.names.find(( name: Name ) => name.language.name === 'en');

        return {
          id: ability.slot,
          name: currentAbility.name,
        };
      })));

      pokemon.hiddenAbilities = await axios.all( data.abilities.filter(( ability: any ) => ability.is_hidden ).map( async ( ability: any ) => await axios.get( ability.ability.url ).then( async ({ data }) => {
        const currentAbility = data.names.find(( name: Name ) => name.language.name === 'en');

        return {
          id: ability.slot,
          name: currentAbility.name,
        };
      })));

      list.push( pokemon as Pokemon );
    })));

    return {
      status: true,
      message: 'Success',
      data: list.sort(( firstItem, secondItem ) => firstItem.id - secondItem.id ),
      total: count,
    }
  } catch (error) {
    return {
      status: false,
      message: error as string,
      data: [],
      total: 0,
    }
  }
};
