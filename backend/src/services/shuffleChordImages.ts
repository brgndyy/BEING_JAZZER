import { KeyChordDetail } from '../models/keyChordDetail';
import shuffleArray from '../utils/shuffleArray';

const THEME = {
  WHITE: 'White',
  DARK: 'Dark',
} as const;

const shuffleChordImages = (chordImages: KeyChordDetail[]) => {
  const whiteImages = chordImages.filter((image) => image.theme === THEME.WHITE);
  const darkImages = chordImages.filter((image) => image.theme === THEME.DARK);

  const shuffledIndices = shuffleArray([...Array(whiteImages.length).keys()]);

  const shuffledWhiteImages = shuffledIndices.map((index) => whiteImages[index]);
  const shuffledDarkImages = shuffledIndices.map((index) => darkImages[index]);

  return { whiteChordImages: shuffledWhiteImages, darkChordImages: shuffledDarkImages };
};

export default shuffleChordImages;
