interface Sprites {
  front_default: string;
}

export interface PokemonEasy {
  id: number;
  name: string;
  types: string[];
  sprites: Sprites;
}
