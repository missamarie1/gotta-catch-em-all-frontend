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
