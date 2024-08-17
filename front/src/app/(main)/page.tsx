import PlayOfModeLink from '@/_components/_common/links/PlayOfModeLink';
import { cookies } from 'next/headers';

export default async function MainPage() {
  cookies().set('test', 'test');

  return <PlayOfModeLink />;
}
