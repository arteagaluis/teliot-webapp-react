import { Inter } from 'next/font/google';
import '../styles/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TelIot',
  description: 'App para telemetria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
