interface Sprites {
  front_default: string;
}

interface Type {
  name: string;
}

interface Types {
  type: Type;
}

export interface Pokemon {
  id: number;
  // easy
  name: string;
  types?: Types[];
  sprites?: Sprites;
  // med
  abilities?: string;
  evolvesFrom?: string;
  evolvesTo?: string;
  // hard
  strengths?: string;
  weaknesses?: string;
  description?: string;
}
