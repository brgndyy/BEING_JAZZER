import Image from 'next/image';
import { DarkLoadingSpinnerImage } from 'public/images/svgs';

export default function DarkLoadingSpinner() {
  return <Image src={DarkLoadingSpinnerImage} height={300} width={300} alt="loading_spinner" />;
}
