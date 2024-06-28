import DarkBannerImage from 'public/assets/svgs/DarkBanner.svg';
import WhiteBannerImage from 'public/assets/svgs/WhiteBanner.svg';

export default function MainLogoImage({ darkTheme }: { darkTheme: boolean }) {
  return darkTheme ? (
    <DarkBannerImage width={100} height={100} />
  ) : (
    <WhiteBannerImage width={100} height={100} />
  );
}
