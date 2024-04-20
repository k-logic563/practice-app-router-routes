import '@mantine/core/styles.css';
import './globals.css';

import Link from 'next/link';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'Dog is cute',
  description: 'Dog is cute',
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <header className="bg-teal-600 text-white">
            <div className="container mx-auto py-3">
              <Link className="font-bold text-2xl" href="/">Dog is cute</Link>
            </div>
          </header>
          <div className="container mx-auto py-8">
            {children}
          </div>
          {modal}
        </MantineProvider>
      </body>
    </html>
  );
}
