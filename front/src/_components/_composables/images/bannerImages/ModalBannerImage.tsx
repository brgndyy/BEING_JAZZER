'use client';

import { useAtomValue } from 'jotai';
import { themeAtom } from '@/_store/themeAtom';
import WhiteModalBannerImage from './WhiteModalBannerImage';
import DarkModalBannerImage from './DarkModalBannerImage';

export default function ModalBannerImage() {
  const darkTheme = useAtomValue(themeAtom);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{darkTheme ? <DarkModalBannerImage /> : <WhiteModalBannerImage />}</>;
}
