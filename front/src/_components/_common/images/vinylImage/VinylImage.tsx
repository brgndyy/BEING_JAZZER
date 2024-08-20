import WhiteModeVinylImage from '@/assets/images/vinylWhiteMode.svg';
import DarkModeVinylImage from '@/assets/images/vinylDarkMode.svg';
import useThemeStore from '@/_store/useThemeStore';
import { vinylImage } from './vinylImage.css';

export default function VinylImage() {
  const currentTheme = useThemeStore((state) => state.theme);

  return (
    <>
      {currentTheme ? (
        <DarkModeVinylImage className={vinylImage} />
      ) : (
        <WhiteModeVinylImage className={vinylImage} />
      )}
    </>
  );
}
