'use client';

import CountDown from '@/_components/_common/countDown/CountDown';
import PageOfSingleChord from '@/_components/_play/PageOfSingleChord';
import { ChordImageData } from '@/_types';
import { useState } from 'react';

type SingleChordPageProps = {
  whiteChordImages: ChordImageData[];
  darkChordImages: ChordImageData[];
};

export default function SingleChordPage({
  darkChordImages,
  whiteChordImages,
}: SingleChordPageProps) {
  const [isInitialMount, setIsInitialMount] = useState(true);

  const handleEndInitialMount = () => {
    setIsInitialMount(false);
  };

  return (
    <>
      {isInitialMount ? (
        <CountDown handleEndInitialMount={handleEndInitialMount} />
      ) : (
        <PageOfSingleChord darkChordImages={darkChordImages} whiteChordImages={whiteChordImages} />
      )}
    </>
  );
}
