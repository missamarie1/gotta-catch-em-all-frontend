export const twoThirds = [true, true, false];
export const oneThirds = [true, false, false];
export function getRandomItem(arr: boolean[]) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

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
