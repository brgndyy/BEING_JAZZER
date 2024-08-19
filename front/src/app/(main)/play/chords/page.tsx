import getAccessTokenValue from '@/_services/token/getAccessTokenValue';
import { getUserInfoByAccessToken } from '@/_apis/authAPI';
import { getDefaultChordImage, getUserChordImage } from '@/_apis/chordImageAPI';
import SingleChordPage from '@/_pages/SingleChordPage/SingleChordPage';

export default async function PlayingChordPage() {
  const accessToken = getAccessTokenValue();
  const userInfo = await getUserInfoByAccessToken(accessToken);
  const { darkChordImages, whiteChordImages } =
    accessToken && userInfo ? await getUserChordImage(accessToken) : await getDefaultChordImage();

  return <SingleChordPage darkChordImages={darkChordImages} whiteChordImages={whiteChordImages} />;
}
