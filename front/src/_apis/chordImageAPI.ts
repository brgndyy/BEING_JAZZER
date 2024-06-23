import { API_ROUTES } from '@/_constants/routes';
import Fetcher from './fetcher/Fetcher';
import { ChordImageData } from '@/_types';

// TODO 서버에서 데이터를 받아와서, 여기서 랜덤으로 섞은 이미지를 무작위로 보여주어야하는데,
// 이거에 대한 작업은 어디에서 이루어지는것이 맞을까 ?

export const getDefaultChordImage = async () => {
  const data = await Fetcher.get<ChordImageData[]>(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.default_chord_images}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data;
};
