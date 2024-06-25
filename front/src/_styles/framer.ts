export const boxVariants = {
  entry: (direction: 'next' | 'previous') => ({
    x: direction === 'previous' ? '-500' : '500',
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction: 'next' | 'previous') => ({
    x: direction === 'previous' ? '500' : '-500',
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};
