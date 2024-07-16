import WhiteModeVinylImage from '@/assets/images/vinylWhiteMode.svg';
import DarkModeVinylImage from '@/assets/images/vinylDarkMode.svg';
import useThemeStore from '@/_store/useThemeStore';

export default function VinylImage() {
  const currentTheme = useThemeStore((state) => state.theme);

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
