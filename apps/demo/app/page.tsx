import FirstComponent from '@/components/FirstComponent';
import Link from 'next/link';

export default function Home() {
  return (
    <p>
      Simple
      <FirstComponent />
      <Link href='/about'>About</Link>
    </p>
  );
}
