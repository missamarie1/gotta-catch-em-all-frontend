interface Sprites {
  front_default: string;
}

interface Type {
  name: string;
}

interface Types {
  type: Type;
}

export interface PokemonEasy {
  id: number;
  name: string;
  types: Types[];
  sprites: Sprites;
}
