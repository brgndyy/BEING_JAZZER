import Image from 'next/image';
import React from 'react';
import { container, singleChordImage } from './singleChordImage.css';

const CDN_URL = 'https://d2qtp7qksp5k9g.cloudfront.net';

type Props = {
  imageUrl: string;
};

export default function SingleChordImage({ imageUrl }: Props) {
  return (
    <div className={container}>
      <Image
        className={singleChordImage}
        src={`${CDN_URL}${imageUrl}`}
        alt="코드 이미지"
        width={100}
        height={100}
      />
    </div>
  );
}
