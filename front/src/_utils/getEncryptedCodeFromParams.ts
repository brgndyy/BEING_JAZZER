import { SearchParams } from '@/_types';

const getEncryptedCodeFromParams = ({ searchParams }: SearchParams) => {
  return (searchParams && searchParams.code ? searchParams.code : '').replace(/ /g, '+');
};

export default getEncryptedCodeFromParams;
