import Image from 'next/image';
import React from 'react';
import { container, singleChordImage } from './singleChordImage.css';
import { myStyle } from '@/_styles/vars.css';
import { CDN_URL } from '@/_constants/routes';

type SingleChordImageProps = {
  imageUrl: string;
};

export default function SingleChordImage({ imageUrl }: SingleChordImageProps) {
  return (
    <div className={container}>
      <Image
        className={`${singleChordImage} ${myStyle}`}
        src={`${CDN_URL}${imageUrl}`}
        alt="코드 이미지"
        width={100}
        height={100}
      />
    </div>
  );
}
