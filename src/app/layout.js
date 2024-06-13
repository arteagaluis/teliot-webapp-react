import { Inter } from 'next/font/google';
import '../styles/index.scss';
import ToggleSwitch from '@/components/ToggleSwitch';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TelIot',
  description: 'App para telemetria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className={styles.container}>
          <div className={styles.container_layout}></div>
        </div> */}
        {children}
      </body>
    </html>
  );
}
