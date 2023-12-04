import { KeyboardEvent } from 'react';

const handleKeyDown = (Fn: () => void) => {
  return (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      Fn();
    }
  };
};

export default handleKeyDown;
