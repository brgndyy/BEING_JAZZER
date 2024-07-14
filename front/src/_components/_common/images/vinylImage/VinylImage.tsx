import WhiteModeVinylImage from '@/assets/images/vinylWhiteMode.svg';
import DarkModeVinylImage from '@/assets/images/vinylDarkMode.svg';
import themeStore from '@/_store/themeStore';

export default function VinylImage() {
  const currentTheme = themeStore((state) => state.theme);

  return (
    <>
      {currentTheme ? (
        <DarkModeVinylImage width={20} height={20} />
      ) : (
        <WhiteModeVinylImage width={20} height={20} />
      )}
    </>
  );
}
