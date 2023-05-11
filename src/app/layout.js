import './globals.css';
import { Inter, Dancing_Script } from 'next/font/google';

export const metadata = {
  title: 'Christine\'s Bakery',
  description: 'Portfolio Site Template',
};

const inter = Inter({ weight: ['variable'], subsets: ['latin'], variable: '--font-text' });
const dancingScript = Dancing_Script({ weight: ['variable'], subsets: ['latin'], variable: '--font-script' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} bg-background
      text-text dark:bg-darkBackground dark:text-darkText`}>
        {children}
      </body>
    </html>
  );
}

