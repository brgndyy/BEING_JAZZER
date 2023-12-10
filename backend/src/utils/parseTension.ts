const parseTension = (tension: string): string => {
  const tensionMapping: { [key: string]: string } = {
    '7(b9)': '7',
    '7(b5)': '7',
    '9(b5)': '9',
    'b9(b13)': '9',
  };

  return tensionMapping[tension] || tension;
};

export default parseTension;
