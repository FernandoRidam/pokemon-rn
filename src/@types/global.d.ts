export declare global {
  type PokeType = 'Normal' | 'Fire' | 'Water' | 'Electric' | 'Grass' | 'Ice' | 'Fighting' | 'Poison' | 'Ground' | 'Flying' | 'Psychic' | 'Bug' | 'Rock' | 'Ghost' | 'Dragon' | 'Dark' | 'Steel' | 'Fairy';

  interface Type {
    id: number;
    name: PokeType;
  };

  interface Statistic {
    name: string;
    value: number;
  };

  interface Ability {
    id: number;
    name: string;
  };

  interface Stats {
    hp: Statistic;
    speed: Statistic;
    attack: Statistic;
    defense: Statistic;
    specialAttack: Statistic;
    specialDefense: Statistic;
  };

  interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    types: Array<Type>;

    stats: Array<Statistic>;
    abilities: Array<Ability>;
    hiddenAbilities: Array<Ability>;
  };

  interface AxiosGlobalReturn<T> {
    status: boolean;
    message: string;
    data: Array<T>;
    total: number;
  };

  namespace ReactNavigation {
    interface RootParamList {
      home: void;
      details: Pokemon;
    };
  };
}
