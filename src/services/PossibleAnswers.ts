export const easyQOne = [
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Caterpie",
  "Weedle",
  "Pidgey",
  "Rattata",
  "Spearow",
  "Ekans",
  "Pikachu",
  "Sandshrew",
  "Nidoran-f",
  "Nidoran-m",
  "Clefairy",
  "Vulpix",
  "Jigglypuff",
  "Zubat",
  "Oddish",
  "Paras",
  "Venonat",
  "Diglett",
  "Meowth",
  "Psyduck",
  "Mankey",
  "Growlithe",
  "Poliwag",
  "Abra",
  "Machop",
  "Bellsprout",
  "Tentacool",
  "Geodude",
  "Ponyta",
  "Slowpoke",
  "Magnemite",
  "Farfetch’d",
  "Doduo",
  "Seel",
  "Grimer",
  "Shellder",
  "Gastly",
  "Onyx",
  "Drowzee",
  "Krabby",
  "Voltorb",
  "Exeggcute",
  "Cubone",
  "Lickitung",
  "Koffing",
  "Rhyhorn",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Goldeen",
  "Staryu",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Ditto",
  "Porygon",
  "Omanyte",
  "Kabuto",
  "Dratini",
];

export const easyTwo = [
  "Grass",
  "Poison",
  "Fire",
  "Flying",
  "Water",
  "Bug",
  "Normal",
  "Electric",
  "Ground",
  "Fairy",
  "Fighting",
  "Psychic",
  "Rock",
  "Steel",
  "Ice",
  "Ghost",
  "Dragon",
];

export const easyThree = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 145, 146, 147, 148, 149, 150, 151,
];

function shuffle(array: string[]) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
export const getFourOptions = (pool: string[], answer: string): string[] => {
  const possibleAnswers: string[] = [];
  while (possibleAnswers.length !== 3) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    if (
      !possibleAnswers.includes(pool[randomIndex]) &&
      pool[randomIndex].toLowerCase() !== answer
    ) {
      possibleAnswers.push(pool[randomIndex]);
    }
  }
  possibleAnswers.push(answer);
  return shuffle(possibleAnswers);
};

function shuffleQThree(array: number[]) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export const getFourOptionsQThree = (
  pool: number[],
  answer: number
): number[] => {
  const possibleAnswers: number[] = [];
  while (possibleAnswers.length !== 3) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    if (
      !possibleAnswers.includes(pool[randomIndex]) &&
      pool[randomIndex] !== answer
    ) {
      possibleAnswers.push(pool[randomIndex]);
    }
  }
  possibleAnswers.push(answer);
  return shuffleQThree(possibleAnswers);
};
