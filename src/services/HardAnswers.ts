import { Pokemon } from "../models/Pokemon";

//double damage against
export const hardQOne = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "unknown",
  "shadow",
];

export const hardQTwo = [
  "ground",
  "fairy",
  "grass",
  "fighting",
  "psychic",
  "normal",
  "fire",
  "flying",
  "ice",
  "ghost",
  "water",
  "no strengths",
];

export const hardQThree = [
  "venusaur",
  "charizard",
  "blastoise",
  "butterfree",
  "beedrill",
  "pidgeot",
  "nidoqueen",
  "nidoking",
  "vileplume",
  "poliwrath",
  "alakazam",
  "machamp",
  "victreebel",
  "golem",
  "gengar",
  "hitmonlee",
  "hitmonchan",
  "lapras",
  "eevee",
  "vaporeon",
  "jolteon",
  "flareon",
  "aerodactyl",
  "snorlax",
  "articuno",
  "zapdos",
  "moltres",
  "mewtwo",
  "mew",
  "dragonite",
];

export const hardPokemon: Pokemon[] = [
  {
    id: 3,
    name: "venusaur",
    strengths: "water",
    weaknesses: "fire",
    description:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
  },
  {
    id: 6,
    name: "charizard",
    strengths: "grass",
    weaknesses: "water",
    description:
      "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
  },
  {
    id: 9,
    name: "blastoise",
    strengths: "fire",
    weaknesses: "grass",
    description:
      "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
  },
  {
    id: 12,
    name: "butterfree",
    strengths: "grass",
    weaknesses: "fire",
    description:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
  },
  {
    id: 15,
    name: "beedrill",
    strengths: "grass",
    weaknesses: "fire",
    description:
      "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
  },
  {
    id: 18,
    name: "pidgeot",
    strengths: "no strengths",
    weaknesses: "electric",
    description:
      "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
  },
  {
    id: 31,
    name: "nidoqueen",
    strengths: "fairy",
    weaknesses: "water",
    description:
      "It is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
  },
  {
    id: 34,
    name: "nidoking",
    strengths: "fairy",
    weaknesses: "water",
    description:
      "When it goes on a rampage, it’s impossible to control. But in the presence of a female it’s lived with for a long time, it calms down.",
  },
  {
    id: 45,
    name: "vileplume",
    strengths: "ground",
    weaknesses: "fire",
    description:
      "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
  },
  {
    id: 62,
    name: "poliwrath",
    strengths: "water",
    weaknesses: "fairy",
    description:
      "Its body is solid muscle. When swimming through cold seas, it uses its impressive arms to smash through drift ice and plow forward.",
  },
  {
    id: 65,
    name: "alakazam",
    strengths: "fighting",
    weaknesses: "ghost",
    description:
      "It has an incredibly high level of intelligence. Some say that it remembers everything that ever happens to it, from birth till death.",
  },
  {
    id: 68,
    name: "machamp",
    strengths: "rock",
    weaknesses: "psychic",
    description:
      "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
  },
  {
    id: 71,
    name: "victreebell",
    strengths: "ground",
    weaknesses: "fire",
    description:
      "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
  },
  {
    id: 76,
    name: "golem",
    strengths: "flying",
    weaknesses: "fighting",
    description:
      "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.",
  },
  {
    id: 94,
    name: "gengar",
    strengths: "ghost",
    weaknesses: "ghost",
    description:
      "On the night of a full moon, if shadows move on their own and laugh, it must be it’s doing.",
  },
  {
    id: 106,
    name: "hitmonlee",
    strengths: "normal",
    weaknesses: "psychic",
    description:
      "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
  },
  {
    id: 107,
    name: "hitmonchan",
    strengths: "normal",
    weaknesses: "psychic",
    description:
      "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
  },
  {
    id: 131,
    name: "lapras",
    strengths: "fire",
    weaknesses: "grass",
    description:
      "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
  },
  {
    id: 133,
    name: "eevee",
    strengths: "no strengths",
    weaknesses: "fighting",
    description:
      "It has the ability to alter the composition of its body to suit its surrounding environment.",
  },
  {
    id: 134,
    name: "vaporeon",
    strengths: "fire",
    weaknesses: "grass",
    description:
      "When it’s fins begin to vibrate, it is a sign that rain will come within a few hours.",
  },
  {
    id: 135,
    name: "jolteon",
    strengths: "flying",
    weaknesses: "ground",
    description:
      "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.",
  },
  {
    id: 136,
    name: "flareon",
    strengths: "ice",
    weaknesses: "water",
    description:
      "Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit.",
  },
  {
    id: 142,
    name: "aerodactyl",
    strengths: "flying",
    weaknesses: "water",
    description:
      "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
  },
  {
    id: 143,
    name: "snorlax",
    strengths: "no strengths",
    weaknesses: "fighting",
    description:
      "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
  },
  {
    id: 144,
    name: "articuno",
    strengths: "flying",
    weaknesses: "fire",
    description:
      "It’s said that this Pokémon’s beautiful blue wings are made of ice. It flies over snowy mountains, its long tail fluttering along behind it.",
  },
  {
    id: 145,
    name: "zapdos",
    strengths: "flying",
    weaknesses: "ice",
    description:
      "This Pokémon has complete control over electricity. There are tales of it nesting in the dark depths of pitch-black thunderclouds.",
  },
  {
    id: 146,
    name: "moltres",
    strengths: "ice",
    weaknesses: "water",
    description:
      "It’s one of the legendary bird Pokémon. When it flaps its flaming wings, they glimmer with a dazzling red glow.",
  },
  {
    id: 149,
    name: "dragonite",
    strengths: "dragon",
    weaknesses: "fairy",
    description:
      "It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon, it simply must help them.",
  },
  {
    id: 150,
    name: "mewtwo",
    strengths: "pyschic",
    weaknesses: "ghost",
    description:
      "Its DNA is almost the same as another pokemon’s. However, its size and disposition are vastly different.",
  },
  {
    id: 151,
    name: "mew",
    strengths: "psychic",
    weaknesses: "ghost",
    description:
      "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
  },
];
