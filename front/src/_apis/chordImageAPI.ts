import { API_ROUTES } from '@/_constants/routes';
import Fetcher from './fetcher/Fetcher';
import { TotalChordImageData } from '@/_types';
import API_URL from '@/_constants/apiUrl';

export const getDefaultChordImage = async () => {
  const data = await Fetcher.get<TotalChordImageData>(
    `${API_URL}${API_ROUTES.default_chord_images}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const { whiteChordImages, darkChordImages } = data;

  return { whiteChordImages, darkChordImages };
};

export const getUserChordImage = async (accessToken: string) => {
  const data = await Fetcher.get<TotalChordImageData>(`${API_URL}${API_ROUTES.user_chord_images}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  const { whiteChordImages, darkChordImages } = data;

  return { whiteChordImages, darkChordImages };
};
