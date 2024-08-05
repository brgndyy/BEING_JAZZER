import { API_ROUTES } from '@/_constants/routes';
import { TotalChordImageData } from '@/_types';
import beingJazzerClient from './clients/beingJazzerClient';
import HttpError from '../_error/HttpError';

export const getDefaultChordImage = async () => {
  const data = await beingJazzerClient.get<TotalChordImageData>(
    `${API_ROUTES.default_chord_images}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!data) {
    throw new HttpError('', 503);
  }

  const { whiteChordImages, darkChordImages } = data;

  return { whiteChordImages, darkChordImages };
};

export const getUserChordImage = async (accessToken: string) => {
  const data = await beingJazzerClient.get<TotalChordImageData>(`${API_ROUTES.user_chord_images}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!data) {
    throw new HttpError('', 503);
  }

  const { whiteChordImages, darkChordImages } = data;

  return { whiteChordImages, darkChordImages };
};
