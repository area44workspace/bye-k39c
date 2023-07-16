import '@/app/globals.css';
import type { Metadata } from 'next';

const url = 'https://goodbye-k39c.netlify.app';
const title = 'Tạm Biệt K39C';
const description = 'Tiệc chia tay lớp Bác sĩ Y khoa K39C HPMU';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: title,
  description: description,
  icons: {
    icon: '/favicon.svg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body className='dark min-h-screen bg-background font-sans antialiased'>
        {children}
      </body>
    </html>
  );
}
