import PageHeader from '@/components/modules/PageHeader';
import './globals.css';
import { Poppins } from 'next/font/google';
import PageFooter from '@/components/modules/PageFooter';
import ScrollContent from '@/components/modules/ScrollContentCards';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: 'Acamp',
  description: 'Acamp Listing Assignment',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`flex min-h-screen w-screen flex-col  ${poppins.className} bg-dirt-white sm:items-center `}
      >
        <PageHeader text="Book a place to camp" badge="/badge.svg" />
        <div className="px-4 sm:w-70 lg:w-40 2xl:w-20">
          <main>{children}</main>
        </div>
        <ScrollContent />
        <PageFooter />
      </body>
    </html>
  );
};

export default RootLayout;
