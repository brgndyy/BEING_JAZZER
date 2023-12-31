import getAccessTokenValue from '@/_services/token/getAccessTokenValue';
import getUserInfoByAccessToken from '@/_services/auth/getUserInfoByAccessToken';
import getUserChordImage from '@/_services/images/getUserChordImage';
import getDefaultChordImage from '@/_services/images/getDefaultChordImage';
import PageOfSingleChord from '@/_components/_play/PageOfSingleChord';

export default async function PlayingChordPage() {
  const accessToken = getAccessTokenValue();
  const userInfo = await getUserInfoByAccessToken(accessToken);
  const chordImages =
    accessToken && userInfo ? await getUserChordImage(accessToken) : await getDefaultChordImage();

  return <PageOfSingleChord />;
}
