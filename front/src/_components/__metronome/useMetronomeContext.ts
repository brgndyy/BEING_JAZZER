import { useContext } from 'react';
import MetronomeContext from './MetronomeContext';

const useMetronomeContext = () => {
  const context = useContext(MetronomeContext);

  if (!context) {
    throw new Error('not found context!');
  }

  return context;
};

export default useMetronomeContext;
