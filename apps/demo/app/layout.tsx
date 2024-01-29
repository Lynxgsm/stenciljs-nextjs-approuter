/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import FirstComponent from '@/components/FirstComponent';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'This Next.js App demonstrates how to use the geko components.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await import('geko-react/server');

  return (
    <html lang='en'>
      <body>
        {children}
        <FirstComponent />
        <Script
          src='./scripts/polyfills/template-shadowroot.js'
          strategy='beforeInteractive'
        />
      </body>
    </html>
  );
}
