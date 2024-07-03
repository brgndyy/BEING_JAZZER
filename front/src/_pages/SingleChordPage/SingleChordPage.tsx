'use client';

import CountDown from '@/_components/_common/countDown/CountDown';
import PageOfSingleChord from '@/_components/_play/PageOfSingleChord';
import { DarkChordImageData, WhiteChordImageData } from '@/_types';
import { useState } from 'react';

type Props = {
  whiteChordImages: WhiteChordImageData[];
  darkChordImages: DarkChordImageData[];
};

export default function SingleChordPage({ darkChordImages, whiteChordImages }: Props) {
  const [isInitialMount, setIsInitialMount] = useState(true);

  const handleEndInitialMount = () => {
    setIsInitialMount(false);
  };

  return (
    <>
      {isInitialMount ? (
        <CountDown handleEndInitialMount = {handleEndInitialMount} />
      ) : (
        <PageOfSingleChord darkChordImages={darkChordImages} whiteChordImages={whiteChordImages} />
      )}
    </>
  );
}
