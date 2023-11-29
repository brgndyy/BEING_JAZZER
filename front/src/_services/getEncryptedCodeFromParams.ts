import { SearchParamsType } from 'types';

const getEncryptedCodeFromParams = ({ searchParams }: SearchParamsType) => {
  return (searchParams && searchParams.code ? searchParams.code : '').replace(/ /g, '+');
};

export default getEncryptedCodeFromParams;
