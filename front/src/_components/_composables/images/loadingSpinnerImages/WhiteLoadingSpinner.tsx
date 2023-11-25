import Image from 'next/image';
import { WhiteLoadingSpinnerImage } from 'public/images/svgs';

export default function WhiteLoadingSpinner() {
  return <Image src={WhiteLoadingSpinnerImage} height={300} width={300} alt="loading_spinner" />;
}
