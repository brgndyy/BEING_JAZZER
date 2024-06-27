const shuffleArray = <T>(array: T[]): T[] => {
  return array.reduce<T[]>((shuffledArray, _, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
    return shuffledArray;
  }, array.slice());
};

export default shuffleArray;
